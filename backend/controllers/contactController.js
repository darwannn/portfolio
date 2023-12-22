const mg = require("mailgun-js");
const dotenv = require("dotenv");

dotenv.config();

const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  });

const myemail = process.env.MY_EMAIL;

const sendEmail = (req, res) => {
  const { name, email, subject, message } = req.body;

  mailgun()
    .messages()
    .send(
      {
        from: `${name} ${email}`,
        to: `${myemail}`,
        subject: `${subject}`,
        html: `<p>${message}</p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            message: "Error in sending email",
          });
        } else {
          console.log(body);
          res.send({
            success: true,
            message: "Email sent successfully",
          });
        }
      }
    );
};

module.exports = {
  sendEmail,
};
