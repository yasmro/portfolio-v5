const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, message } = req.body
  const senderEmail = 'kantillo0683@gmail.com'

  const content = {
    to: senderEmail,
    from: senderEmail,
    subject: `New Message From - ${name} (${email})`,
    text: `New Message From - ${name} (${email}). \n ${message}`,
    html: `<h1>ポートフォリオサイトより問い合わせがありました</h1>
    <p>差出人名：${name}</p>
    <p>メールアドレス：${email}</p>
    <p>送信日時(Local Time)：${new Date().toLocaleString()}</p>
    <p>送信日時(UTC)：${new Date().toUTCString()}</p>
    <p>${message}</p>`
  }
  
  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}