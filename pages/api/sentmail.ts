import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import nodemailer from "nodemailer";
const sentEmail = async (address: string, subject: string, payload: any) => {
  try {
    console.log("email is sending... ");

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      service: process.env.SMTP_SERVICE_PROVIDER,
      auth: {
        user: process.env.SMTP_AUTH_USER, // generated ethereal user
        pass: process.env.SMTP_AUTH_PASSWORD, // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
      from: process.env.SMTP_AUTH_USER, // sender address
      to: address, // list of receivers
      subject: subject || "Testing gmail STMP server", // Subject line
      text: " ", // plain text body
      html: payload || "<b>Hello. I was just testing you </b>", // html body
    });

    console.log("Message successfully sent => ", info.messageId);
  } catch (error) {
    console.log(error);
  }
};
export default function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  res.send(req.body);
}
