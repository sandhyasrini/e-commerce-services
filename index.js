const express = require('express')
const port = process.env.PORT || 8000;
var cors = require('cors')
const routes = require('./api/routes/routes')
const initiateMongoServer = require('./config/database')

const app = express();

initiateMongoServer();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => { console.log('Server started on port: ' + port); });

