
const nodemailer = require("nodemailer");

require("dotenv").config();

const {USER_PASSWORD, USER_NAME} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: USER_NAME,
        pass: USER_PASSWORD
    }
};
const transporter = nodemailer.createTransport(nodemailerConfig);


const sendEmail = async (data) => {
    const email = { ...data, from: USER_NAME };
    await transporter.sendMail(email);
    return true;
  };

module.exports = sendEmail;