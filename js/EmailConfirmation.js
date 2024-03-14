const nodeMailer = require('nodemailer');

const html = `
<h1>Thank you for contacting LVC</h1>

<p>Your message was received, please allow up to 24 hours for a reply</p>
<img src ="cid:logoLVC" width = "300">
`;

async function main(){



    const transporter = nodeMailer.createTransport({
        //info about the server that is sending the server 
        host: 'mail.openjavascript.info',
        port: 465,
        secure: true, //true 465, //587 for secure false
        auth:{
            user: 'mywatchmoviesburn@gmail.com',
            pass: 'qjq7pfy_agn*NZJ*xnk',
        }
    });
    const info = await transporter.sendMail({
        from: 'mywatch <mywatchmoviesburn@gmail.com>',//name of sender & email of the sender
        to: 'myemailfortesting3@gmail.com',
        subject: 'Testing',
        html: html,
        attachments: [{
            filename: 'LVC-Logo',
            path: './LVC-Logo',
            cid:'logoLVC'//content id
        }]
    });
    console.log("Message sent" + info.messageId);
}

main()
.catch(e => console.log(e)); //catch error


//messageSent.html