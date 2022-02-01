const express = require('express')
const port = process.env.PORT || 8000;
const cors = require('cors')
const logger = require('morgan')
const routes = require('./api/routes/routes')
const initiateMongoServer = require('./config/database')
const passport = require("passport");
var session = require('express-session')

const app = express();

require("./config/passport")(passport)

initiateMongoServer();

app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use('/api', routes)
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => { console.log('Server started on port: ' + port); });

