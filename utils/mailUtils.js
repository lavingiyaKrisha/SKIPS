const mailer = require("nodemailer")

const mailSend = async(to,subject,text)=>{

    const transport = mailer.createTransport({
        service:"gmail",
        auth:{
            user:"pythonforsamir@gmail.com",
            pass:"zaea yoke kxxc vurh"
        }
    })
    const mailOption = {
        from:"pythonforsamir@gmail.com",
        to:to,
        text:text,
        subject:subject
    }
    const mailresponse = await transport.sendMail(mailOption)
    console.log(mailresponse)

}




module.exports = {
    mailSend
}