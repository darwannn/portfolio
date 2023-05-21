const express = require('express');
const dotenv = require('dotenv');
const mg = require('mailgun-js');

dotenv.config();

const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const myemail = "darwinsanluis.ramos14@gmail.com";
app.post('/api/email', (req, res) => {
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
          res.status(500).send({ message: 'Error in sending email' });
        } else {
          console.log(body);
          res.send({ message: 'Email sent successfully' });
        }
      }
    );
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
