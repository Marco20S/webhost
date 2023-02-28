
const express = require('express')
const index = express()
const port = 5000


index.listen(port,()  => 
{
    

})



var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  });
  
  var mailOptions = {
    from: '',
    to: '',
    subject: 'Sending Email using Node.js',
    text: 'That was easy! Thabk yor for subscribing we will update you when the website is up and running'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


index.listen(port,() => 

{console.log('nodemailerProject is listening at htpp://localhost:$(port)')



} );



  

















