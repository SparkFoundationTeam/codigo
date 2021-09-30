const nodemailer = require("nodemailer");

class SendEmail {
  sendEmail = (To, Subject, topic, recieverName, attachPdf) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      //   host: "smtp.gmail.com",
      //   port: 587,
      //   secure: false,
      // auth: {
      //     user: "saideepclasses1818@gmail.com",
      //     pass: "Saideep@1818"
      // }
      auth: {
        user: "codigoteams@gmail.com",
        pass: "BhAtAdVs@54321",
      },
    });

    const mailOptions = {
      from: "codigoteams@gmail.com",
      to: To,
      subject: Subject,
      html: topic,

      attachments: attachPdf
        ? [
            {
              filename: "codiGoCertificates.pdf",
              path: "./codiGoCertificates.pdf",
              cid: "codiGoCertificates",
            },
          ]
        : [],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email Sent : " + info.response);
      }
    });
  };
}
let email = new SendEmail();

email.sendEmail("atharvabhagat@ieee.org", "Baray", "Bhavesh Mhadse", false);
// module.exports = SendEmail;
