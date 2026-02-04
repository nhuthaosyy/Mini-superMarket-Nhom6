require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: 'TEST MAIL',
  text: 'Gui mail thanh cong'
}, (err, info) => {
  if (err) console.log('LOI:', err)
  else console.log('OK:', info.response)
})
