const express = require("express");
const router = express.Router();
const Mental = require("../models/mentalSchema.js");


router.post('/post', async(req, res)=>{
    const post__Mental = new Mental({
        title: req.body.title,
        description: req.body.description,
        Mental: req.body.Mental
    });
    try{
        const savedMental = await post__Mental.save();
        res.json(savedMental);
    }catch(err){
        // console.log(err)
        res.json({msg : err});
    }
});

router.get('/find', async (req, res) => {
    try{
        const get__Mental = await Mental.find();
        res.json(get__Mental);
    }catch(error){
        res.json({msg:error});
    }
});

module.exports = router;