let LocalStrategy = require('passport-local').Strategy;
let users = require('../api/models/Users')
const bcrypt = require('bcrypt');


module.exports = async function (passport) {

    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
      passport.deserializeUser(function(user, done) {
        done(null, user);
      });
    await passport.use('local-login', new LocalStrategy(async function verify(username, password, done) {
            await users.findOne({ 'username': username }, async (err, user) => {
                if (err)
                    rconsole.log(err)
                if (!user)
                    console.log('User not found!')
                else {
                    let verifyPassword = await bcrypt.compareSync(password, user.password)
                    console.log("verifyPassword", verifyPassword)
                    return done(null, verifyPassword);
                }
            }).clone()
    }))
}
