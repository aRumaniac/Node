const express = require("express");
const router = express.Router();
const activity = require("../models/activitySchema");


router.post('/post', async(req, res)=>{
    const post__activity = new activity({
        image: req.body.image,
        Name: req.body.Name,
        Email: req.body.Email,
        contact: req.body.contact,
        Mode: req.body.Mode,
        charge: req.body.charge,
        EstablishmentID: req.body.EstablishmentID,
        Street: req.body.Street,
        City: req.body.City,
        Zipcode:  req.body.Zipcode,
        District: req.body.District,
        State: req.body.State,
        Country: req.body.Country
    });
    try{
        const savedActivity = await post__activity.save();
        res.json(savedActivity);
    }catch(err){
        res.json({err});
        console.log(err)
    }
});

router.get('/find', async (req, res) => {
    try{
        const get__activity = await activity.find();
        res.json(get__activity);
    }catch(error){
        res.json({error});
        console.log(err)

    }
});

module.exports = router;