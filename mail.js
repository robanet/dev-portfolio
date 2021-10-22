const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
const dotenv = require('dotenv').config();

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "surja333@gmail.com",
//         pass: "vreiwrpmpuvlgudx",
//     }
// })

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: 'sandbox2c4746632b6f4919bea83e164b64a8e5.mailgun.org',
    }
}

const transporter = nodemailer.createTransport(mailgun(auth));

const sendContactMail = (from, name, subject, text, callBack) => {
    const mailOptions = {
        from : from,
        to : "suhridtalukder333@gmail.com",
        subject : subject,
        html : `
        <!doctype html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Contact Form Email</title>
            <style>
              body {
                background-color: #f6f6f6;
                font-family: sans-serif;
                -webkit-font-smoothing: antialiased;
                font-size: 14px;
                line-height: 1.4;
                margin: 0;
                padding: 0;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%; 
              }
              table {
                border-collapse: separate;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                width: 100%; }
                table td {
                  font-family: sans-serif;
                  font-size: 14px;
                  vertical-align: top; 
              }
              .body {
                background-color: #f6f6f6;
                width: 100%; 
              }
              .container {
                display: block;
                margin: 0 auto !important;
                /* makes it centered */
                max-width: 580px;
                padding: 10px;
                width: 580px; 
              }
              .content {
                box-sizing: border-box;
                display: block;
                margin: 0 auto;
                max-width: 580px;
                padding: 10px; 
              }
              .main {
                background: #ffffff;
                border-radius: 3px;
                width: 100%; 
              }
        
              .wrapper {
                box-sizing: border-box;
                padding: 20px; 
              }
        
              .content-block {
                padding-bottom: 10px;
                padding-top: 10px;
              }
              h1,
              h2,
              h3,
              h4 {
                color: #000000;
                font-family: sans-serif;
                font-weight: 400;
                line-height: 1.4;
                margin: 0;
                margin-bottom: 30px; 
              }
        
              h1 {
                font-size: 35px;
                font-weight: 300;
                text-align: center;
                text-transform: capitalize; 
              }
        
              p,
              ul,
              ol {
                font-family: sans-serif;
                font-size: 14px;
                font-weight: normal;
                margin: 0;
                margin-bottom: 15px; 
              }
                p li,
                ul li,
                ol li {
                  list-style-position: inside;
                  margin-left: 5px; 
              }
        
              a {
                color: #3498db;
                text-decoration: underline; 
              }
              .last {
                margin-bottom: 0; 
              }
        
              .first {
                margin-top: 0; 
              }
        
              .align-center {
                text-align: center; 
              }
        
              .align-right {
                text-align: right; 
              }
        
              .align-left {
                text-align: left; 
              }
        
              .clear {
                clear: both; 
              }
        
              .mt0 {
                margin-top: 0; 
              }
        
              .mb0 {
                margin-bottom: 0; 
              }
        
              .preheader {
                color: transparent;
                display: none;
                height: 0;
                max-height: 0;
                max-width: 0;
                opacity: 0;
                overflow: hidden;
                mso-hide: all;
                visibility: hidden;
                width: 0; 
              }
        
              .powered-by a {
                text-decoration: none; 
              }
        
              hr {
                border: 0;
                border-bottom: 1px solid #f6f6f6;
                margin: 20px 0; 
              }
              /* -------------------------------------
                  RESPONSIVE AND MOBILE FRIENDLY STYLES
              ------------------------------------- */
              @media only screen and (max-width: 620px) {
                table[class=body] h1 {
                  font-size: 28px !important;
                  margin-bottom: 10px !important; 
                }
                table[class=body] p,
                table[class=body] ul,
                table[class=body] ol,
                table[class=body] td,
                table[class=body] span,
                table[class=body] a {
                  font-size: 16px !important; 
                }
                table[class=body] .wrapper,
                table[class=body] .article {
                  padding: 10px !important; 
                }
                table[class=body] .content {
                  padding: 0 !important; 
                }
                table[class=body] .container {
                  padding: 0 !important;
                  width: 100% !important; 
                }
                table[class=body] .main {
                  border-left-width: 0 !important;
                  border-radius: 0 !important;
                  border-right-width: 0 !important; 
                }
                table[class=body] .btn table {
                  width: 100% !important; 
                }
                table[class=body] .btn a {
                  width: 100% !important; 
                }
                table[class=body] .img-responsive {
                  height: auto !important;
                  max-width: 100% !important;
                  width: auto !important; 
                }
              }
        
              /* -------------------------------------
                  PRESERVE THESE STYLES IN THE HEAD
              ------------------------------------- */
              @media all {
                .ExternalClass {
                  width: 100%; 
                }
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div {
                  line-height: 100%; 
                }
                .apple-link a {
                  color: inherit !important;
                  font-family: inherit !important;
                  font-size: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
                  text-decoration: none !important; 
                }
                #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
                  font-size: inherit;
                  font-family: inherit;
                  font-weight: inherit;
                  line-height: inherit;
                }
                .btn-primary table td:hover {
                  background-color: #34495e !important; 
                }
                .btn-primary a:hover {
                  background-color: #34495e !important;
                  border-color: #34495e !important; 
                } 
              }
        
            </style>
          </head>
          <body class="">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
              <tr>
                <td>&nbsp;</td>
                <td class="container">
                  <div class="content">
                    <table role="presentation" class="main">
                      <tr>
                        <td class="wrapper">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td>
                                <p>Hi there,</p>
                                <p>${name} wants to contact You via email ${from}. YAY!!!!</p>
                                <h3>His/Her Message :</h3>
                                <p>${text}.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
        
                    <!-- END MAIN CONTENT AREA -->
                    </table>
                    <!-- END CENTERED WHITE CONTAINER -->
                  </div>
                </td>
                <td>&nbsp;</td>
              </tr>
            </table>
          </body>
        </html>`
    };
    
    transporter.sendMail(mailOptions, (err,info) => {
        if(err){
            callBack(err, null);
        }
        else{
           callBack(null, info);
        }
    })
    
}


const sendStartupInqueyMail = (from, name, subject, text, role, project, callBack) => {
    const mailOptions = {
        from : from,
        to : "suhridtalukder333@gmail.com",
        subject : subject,
        html : `
        <!doctype html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Startup Inquery Form Email</title>
            <style>
              body {
                background-color: #f6f6f6;
                font-family: sans-serif;
                -webkit-font-smoothing: antialiased;
                font-size: 14px;
                line-height: 1.4;
                margin: 0;
                padding: 0;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%; 
              }
              table {
                border-collapse: separate;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                width: 100%; }
                table td {
                  font-family: sans-serif;
                  font-size: 14px;
                  vertical-align: top; 
              }
              .body {
                background-color: #f6f6f6;
                width: 100%; 
              }
              .container {
                display: block;
                margin: 0 auto !important;
                /* makes it centered */
                max-width: 580px;
                padding: 10px;
                width: 580px; 
              }
              .content {
                box-sizing: border-box;
                display: block;
                margin: 0 auto;
                max-width: 580px;
                padding: 10px; 
              }
              .main {
                background: #ffffff;
                border-radius: 3px;
                width: 100%; 
              }
        
              .wrapper {
                box-sizing: border-box;
                padding: 20px; 
              }
        
              .content-block {
                padding-bottom: 10px;
                padding-top: 10px;
              }
              h1,
              h2,
              h3,
              h4 {
                color: #000000;
                font-family: sans-serif;
                font-weight: 400;
                line-height: 1.4;
                margin: 0;
                margin-bottom: 30px; 
              }
        
              h1 {
                font-size: 35px;
                font-weight: 300;
                text-align: center;
                text-transform: capitalize; 
              }
        
              p,
              ul,
              ol {
                font-family: sans-serif;
                font-size: 14px;
                font-weight: normal;
                margin: 0;
                margin-bottom: 15px; 
              }
                p li,
                ul li,
                ol li {
                  list-style-position: inside;
                  margin-left: 5px; 
              }
        
              a {
                color: #3498db;
                text-decoration: underline; 
              }
              .last {
                margin-bottom: 0; 
              }
        
              .first {
                margin-top: 0; 
              }
        
              .align-center {
                text-align: center; 
              }
        
              .align-right {
                text-align: right; 
              }
        
              .align-left {
                text-align: left; 
              }
        
              .clear {
                clear: both; 
              }
        
              .mt0 {
                margin-top: 0; 
              }
        
              .mb0 {
                margin-bottom: 0; 
              }
        
              .preheader {
                color: transparent;
                display: none;
                height: 0;
                max-height: 0;
                max-width: 0;
                opacity: 0;
                overflow: hidden;
                mso-hide: all;
                visibility: hidden;
                width: 0; 
              }
        
              .powered-by a {
                text-decoration: none; 
              }
        
              hr {
                border: 0;
                border-bottom: 1px solid #f6f6f6;
                margin: 20px 0; 
              }
              /* -------------------------------------
                  RESPONSIVE AND MOBILE FRIENDLY STYLES
              ------------------------------------- */
              @media only screen and (max-width: 620px) {
                table[class=body] h1 {
                  font-size: 28px !important;
                  margin-bottom: 10px !important; 
                }
                table[class=body] p,
                table[class=body] ul,
                table[class=body] ol,
                table[class=body] td,
                table[class=body] span,
                table[class=body] a {
                  font-size: 16px !important; 
                }
                table[class=body] .wrapper,
                table[class=body] .article {
                  padding: 10px !important; 
                }
                table[class=body] .content {
                  padding: 0 !important; 
                }
                table[class=body] .container {
                  padding: 0 !important;
                  width: 100% !important; 
                }
                table[class=body] .main {
                  border-left-width: 0 !important;
                  border-radius: 0 !important;
                  border-right-width: 0 !important; 
                }
                table[class=body] .btn table {
                  width: 100% !important; 
                }
                table[class=body] .btn a {
                  width: 100% !important; 
                }
                table[class=body] .img-responsive {
                  height: auto !important;
                  max-width: 100% !important;
                  width: auto !important; 
                }
              }
        
              /* -------------------------------------
                  PRESERVE THESE STYLES IN THE HEAD
              ------------------------------------- */
              @media all {
                .ExternalClass {
                  width: 100%; 
                }
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div {
                  line-height: 100%; 
                }
                .apple-link a {
                  color: inherit !important;
                  font-family: inherit !important;
                  font-size: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
                  text-decoration: none !important; 
                }
                #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
                  font-size: inherit;
                  font-family: inherit;
                  font-weight: inherit;
                  line-height: inherit;
                }
                .btn-primary table td:hover {
                  background-color: #34495e !important; 
                }
                .btn-primary a:hover {
                  background-color: #34495e !important;
                  border-color: #34495e !important; 
                } 
              }
        
            </style>
          </head>
          <body class="">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
              <tr>
                <td>&nbsp;</td>
                <td class="container">
                  <div class="content">
                    <table role="presentation" class="main">
                      <tr>
                        <td class="wrapper">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td>
                                <p>Hi there,</p>
                                <p>${name} wants to contact You via email ${from}. YAY!!!!</p>
                                <p>Project: ${project} </p>
                                <p>Interest: ${role} </p>
                                <h3>His/Her Message :</h3>
                                <p>${text}.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
        
                    <!-- END MAIN CONTENT AREA -->
                    </table>
                    <!-- END CENTERED WHITE CONTAINER -->
                  </div>
                </td>
                <td>&nbsp;</td>
              </tr>
            </table>
          </body>
        </html>`
    };
    
    transporter.sendMail(mailOptions, (err,info) => {
        if(err){
            callBack(err, null);
        }
        else{
           callBack(null, info);
        }
    })
    
}

const sendMentorshipInqueryMail = ( from, name, subject, story, type, outcome, callBack) => {
    const mailOptions = {
        from : from,
        to : "suhridtalukder333@gmail.com",
        subject : subject,
        html : `
        <!doctype html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Startup Inquery Form Email</title>
            <style>
              body {
                background-color: #f6f6f6;
                font-family: sans-serif;
                -webkit-font-smoothing: antialiased;
                font-size: 14px;
                line-height: 1.4;
                margin: 0;
                padding: 0;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%; 
              }
              table {
                border-collapse: separate;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                width: 100%; }
                table td {
                  font-family: sans-serif;
                  font-size: 14px;
                  vertical-align: top; 
              }
              .body {
                background-color: #f6f6f6;
                width: 100%; 
              }
              .container {
                display: block;
                margin: 0 auto !important;
                /* makes it centered */
                max-width: 580px;
                padding: 10px;
                width: 580px; 
              }
              .content {
                box-sizing: border-box;
                display: block;
                margin: 0 auto;
                max-width: 580px;
                padding: 10px; 
              }
              .main {
                background: #ffffff;
                border-radius: 3px;
                width: 100%; 
              }
        
              .wrapper {
                box-sizing: border-box;
                padding: 20px; 
              }
        
              .content-block {
                padding-bottom: 10px;
                padding-top: 10px;
              }
              h1,
              h2,
              h3,
              h4 {
                color: #000000;
                font-family: sans-serif;
                font-weight: 400;
                line-height: 1.4;
                margin: 0;
                margin-bottom: 30px; 
              }
        
              h1 {
                font-size: 35px;
                font-weight: 300;
                text-align: center;
                text-transform: capitalize; 
              }
        
              p,
              ul,
              ol {
                font-family: sans-serif;
                font-size: 14px;
                font-weight: normal;
                margin: 0;
                margin-bottom: 15px; 
              }
                p li,
                ul li,
                ol li {
                  list-style-position: inside;
                  margin-left: 5px; 
              }
        
              a {
                color: #3498db;
                text-decoration: underline; 
              }
              .last {
                margin-bottom: 0; 
              }
        
              .first {
                margin-top: 0; 
              }
        
              .align-center {
                text-align: center; 
              }
        
              .align-right {
                text-align: right; 
              }
        
              .align-left {
                text-align: left; 
              }
        
              .clear {
                clear: both; 
              }
        
              .mt0 {
                margin-top: 0; 
              }
        
              .mb0 {
                margin-bottom: 0; 
              }
        
              .preheader {
                color: transparent;
                display: none;
                height: 0;
                max-height: 0;
                max-width: 0;
                opacity: 0;
                overflow: hidden;
                mso-hide: all;
                visibility: hidden;
                width: 0; 
              }
        
              .powered-by a {
                text-decoration: none; 
              }
        
              hr {
                border: 0;
                border-bottom: 1px solid #f6f6f6;
                margin: 20px 0; 
              }
              /* -------------------------------------
                  RESPONSIVE AND MOBILE FRIENDLY STYLES
              ------------------------------------- */
              @media only screen and (max-width: 620px) {
                table[class=body] h1 {
                  font-size: 28px !important;
                  margin-bottom: 10px !important; 
                }
                table[class=body] p,
                table[class=body] ul,
                table[class=body] ol,
                table[class=body] td,
                table[class=body] span,
                table[class=body] a {
                  font-size: 16px !important; 
                }
                table[class=body] .wrapper,
                table[class=body] .article {
                  padding: 10px !important; 
                }
                table[class=body] .content {
                  padding: 0 !important; 
                }
                table[class=body] .container {
                  padding: 0 !important;
                  width: 100% !important; 
                }
                table[class=body] .main {
                  border-left-width: 0 !important;
                  border-radius: 0 !important;
                  border-right-width: 0 !important; 
                }
                table[class=body] .btn table {
                  width: 100% !important; 
                }
                table[class=body] .btn a {
                  width: 100% !important; 
                }
                table[class=body] .img-responsive {
                  height: auto !important;
                  max-width: 100% !important;
                  width: auto !important; 
                }
              }
        
              /* -------------------------------------
                  PRESERVE THESE STYLES IN THE HEAD
              ------------------------------------- */
              @media all {
                .ExternalClass {
                  width: 100%; 
                }
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div {
                  line-height: 100%; 
                }
                .apple-link a {
                  color: inherit !important;
                  font-family: inherit !important;
                  font-size: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
                  text-decoration: none !important; 
                }
                #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
                  font-size: inherit;
                  font-family: inherit;
                  font-weight: inherit;
                  line-height: inherit;
                }
                .btn-primary table td:hover {
                  background-color: #34495e !important; 
                }
                .btn-primary a:hover {
                  background-color: #34495e !important;
                  border-color: #34495e !important; 
                } 
              }
        
            </style>
          </head>
          <body class="">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
              <tr>
                <td>&nbsp;</td>
                <td class="container">
                  <div class="content">
                    <table role="presentation" class="main">
                      <tr>
                        <td class="wrapper">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td>
                                <p>Hi there,</p>
                                <p>${name} wants to contact You via email ${from}. YAY!!!!</p>
                                <p>Type: ${type}</p>
                                <p>Outcome: ${outcome} </p>
                                <p>Story: ${story} </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
        
                    <!-- END MAIN CONTENT AREA -->
                    </table>
                    <!-- END CENTERED WHITE CONTAINER -->
                  </div>
                </td>
                <td>&nbsp;</td>
              </tr>
            </table>
          </body>
        </html>`
    };
    
    transporter.sendMail(mailOptions, (err,info) => {
        if(err){
            callBack(err, null);
        }
        else{
           callBack(null, info);
        }
    });
};

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'surja333@gmail.com', // Change to your recipient
//   from: 'surja333@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })


module.exports = {
    sendContactMail,
    sendStartupInqueyMail,
    sendMentorshipInqueryMail,
};