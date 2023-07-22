const express = require("express");
const router = express.Router();
const feedback = require("../models/feedbackSchema");


router.post('/post', async(req, res)=>{
    const post__feedback = new feedback({
        feedback_id: req.body.feedback_id,
        booked: req.body.booked,
        rating: req.body.rating,
        comment: req.body.comment,

    });
    try{
        const savedfeedback = await post__feedback.save();
        res.json(savedfeedback);
    }catch(err){
        res.json({msg : err});
    }
});

router.get('/find', async (req, res) => {
    try{
        const get__feedback = await feedback.find();
        res.json(get__feedback);
    }catch(error){
        res.json({msg:error});
    }
});

module.exports = router;