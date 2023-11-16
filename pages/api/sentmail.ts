import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "mail.isoftex.com",
  port: process.env.SMTP_PORT || 465,
  secure: process.env.SMTP_SECURE || true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.SMTP_AUTH_USER || "easyshopia@isoftex.com",
    pass: process.env.SMTP_AUTH_PASSWORD || "ra43641652#",
  },
});

async function sendEmail(email?: string, subject?: string, body?: any) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "easyshopia@isoftex.com", // sender address
    to: "mrmminhaz@gmail.com", // list of receivers
    subject: subject, // Subject line
    html: "helo", // html body
  });
  return info;
}
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  await sendEmail();
  console.log("email sent ");
  res.send(req.body);
}
