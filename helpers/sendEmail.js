const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "obushchakolga@meta.ua",
        pass: META_PASSWORD
    }
};
const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
    to: "lasab43270@niback.com",
    from: "obushchakolga@meta.ua",
    subject: "Test email",
    html: "<p><strong>Test email</strong> from localhost: 3001</p>"
};

transport.sendMail(email)
.then(() => console.log("Email send success"))
.catch(error => console.log(error.message));