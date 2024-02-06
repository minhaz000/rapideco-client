import generateOrderNotificationEmail from "@/utils/template[order]";
import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import nodemailer from "nodemailer";
import { createRouter } from "next-connect";
const apiRoute = createRouter<NextApiRequest, NextApiResponse>();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT as any),
  secure: Boolean(process.env.SMTP_SECURE),
  auth: {
    user: process.env.SMTP_AUTH_USER,
    pass: process.env.SMTP_AUTH_PASSWORD,
  },
});

async function sendEmail(subject?: string, body?: any) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.SMTP_AUTH_USER, // sender address
    to: process.env.ADMIN_EMAIL, // list of receivers
    subject: subject, // Subject line
    html: body, // html body
  });
  return info;
}

apiRoute.post(async (req: any, res: any) => {
  // main api function

  const body = generateOrderNotificationEmail(req.body.order);
  await sendEmail(req.body.subject || "Notification of New Order", body);
  res.status(201).json({ message: "email sent sucessfully" });
});

export default apiRoute.handler({
  onError: (err: any, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
