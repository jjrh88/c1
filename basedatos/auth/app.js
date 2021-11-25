const express = require('express'),
app = express(),
http = require('http').Server(app),
bodyParser = require('body-parser'),
cors = require('cors'),
config = require('../auth/config/config'),
db = require('../auth/database/database'),
init = require('../auth/init/init')
//mail = require('../auth/service/mail')
//init.createUser()

//mail.email()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use("/api", require('../auth/routes/'))

http.listen(config.port, () => {
  console.log('Server is running in port', config.port);
});
