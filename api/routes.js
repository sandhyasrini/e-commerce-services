const { Router } = require('express');
const Users = require("../models/Users")
const routes = Router();

routes.get('/login', (req, res) => {
    res.send("logged in");
})

module.exports = routes;