const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

const sendEmail = (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${name}`,
      to: process.env.MY_EMAIL,
      subject: `${subject}`,
      html: `
      <div>
        <p>${message}</p>
        <br>
        <p>${name}</p>
        <p>${email}</p>
      </div>`,
    };
    console.log(mailOptions);

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send({
          success: false,
          message: "Error in sending email",
        });
      }
      console.log(info);
      res.send({
        success: true,
        message: "Email sent successfully",
      });
    });
  } catch (error) {
    res.send({
      success: true,
      message: "Internal server error. Please try again later",
    });
  }
};

module.exports = {
  sendEmail,
};
