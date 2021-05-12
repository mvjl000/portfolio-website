import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, message } = req.body;

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.USER_PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: process.env.USER_MAIL,
    to: process.env.DESTINATION_MAIL,
    subject: `Message From ${email}`,
    text: message,
    html: `<div><h3>${email}</h3><p>${message}</p></div>`,
  };
  //@ts-ignore
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Failed to send an email' });
    } else {
      console.log(info);
      res
        .status(200)
        .json({
          message: 'Email sent successfully',
          messageId: info.messageId,
        });
    }
  });
};

export default handler;
