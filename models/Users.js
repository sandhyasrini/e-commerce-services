const mongoose = require('mongoose');

const User = mongoose.Schema({
    username: String,
    password: String
})

module.exports = User;