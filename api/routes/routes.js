const { Router } = require('express');
const user = require("../../models/Users")
const routes = Router();

routes.get('/login', async (req, res) => {
    const User = await user.find()
    res.send(User);
})

routes.post('/users', async (req, res) => {
    
    const User = new user({
        username: req.body.username,
        password: req.body.password
    })
    await User.save();
    res.send(User)
})

module.exports = routes;