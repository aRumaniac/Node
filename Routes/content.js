const express = require("express");
const router = express.Router();
const Content = require("../models/contentSchema");


router.post('/post', async(req, res)=>{
    const post__content = new Content({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    });
    try{
        const savedContent = await post__content.save();
        res.json(savedContent);
    }catch(err){
        res.json({msg : "err"});
    }
});

router.get('/find', async (req, res) => {
    try{
        const get__content = await Content.find();
        res.json(get__content);
    }catch(error){
        res.json({msg:error});
    }
});

module.exports = router;