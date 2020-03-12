const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../model/user');

router.get('/', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        console.log("user", user);
        res.json(user);
    } catch(err){
        console.log("err.message", err.message);        
        res.json(err.message);
    }
});

module.exports = router;