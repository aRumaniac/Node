const express = require("express");
const router = express.Router();
const booking = require("../models/bookingSchema");
const nodemailer = require("nodemailer");


router.post('/post', async(req, res)=>{
    const post__booking = new booking({
        booking_id: req.body.booking_id,
        booked: req.body.booked,
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time
    });
    try{

// async..await is not allowed in global scope, must use a wrapper
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "http://localhost:3000/",
    port: 3000,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: testAccount.user, // sender address
    to: req.body.email, // list of receivers
    subject: "Booking", // Subject line
    text: "Thank you", // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        const savedbooking = await post__booking.save();
        res.json(savedbooking);
    }catch(err){
        res.json({msg : err});
        console.log(err);
    }
});

router.get('/find', async (req, res) => {
    try{
        const get__booking = await booking.find();
        res.json(get__booking);
    }catch(error){
        res.json({msg:error});
    }
});

module.exports = router;