const express = require("express");
const router = express.Router();
const counsellor = require("../models/counsellorSchema");


router.post('/post', async(req, res)=>{
    const post__counsellor = new counsellor({
        image: req.body.image,
        Name: req.body.Name,
        Email: req.body.Email,
        contact: req.body.contact,
        Mode: req.body.Mode,
        charge: req.body.charge,
        MedicalLicense: req.body.MedicalLicense,
        Street: req.body.Street,
        City: req.body.City,
        Zipcode:  req.body.Zipcode,
        District: req.body.District,
        State: req.body.State,
        Country: req.body.Country,
        MeetLink: req.body.MeetLink
    });
    try{
        const savedcounsellor = await post__counsellor.save();
        res.json(savedcounsellor);
    }catch(err){
        res.json({msg : err});
    }
});

router.get('/find', async (req, res) => {
    try{
        const get__counsellor = await counsellor.find();
        res.json(get__counsellor);
    }catch(error){
        res.json({msg:error});
    }
});

module.exports = router;