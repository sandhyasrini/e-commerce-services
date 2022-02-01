const { Router } = require('express');
const user = require("../models/Users");
const hashPassword = require("../../lib/bcrypt")
const routes = Router();
var passport = require('passport'); 

routes.get('/getUsers', async (req, res) => {
    const User = await user.find()
    res.send(User);
})

routes.post('/signup', async (req, res) => {
    let val = await hashPassword(req.body.password);
    const User = new user({
        username: req.body.username,
        password: val
    })
    await User.save();
    res.send(User)
})

routes.post('/login', (req,res,next) => { passport.authenticate('local-login', { 
    successRedirect : '/api/getUsers',       
    failureRedirect : '/login'
})(req,res,next)
}); 

module.exports = routes;