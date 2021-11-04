const express = require('express'),
app = express(),
http = require('http').Server(app),
bodyParser = require('body-parser'),
cors = require('cors'),
config = require('./config/config'),
db = require("./database/database"),
init = require('./init/init')



//jobs 
//init.createUser()
//<<<<<<< HEAD
// init.createRole()
// init.createInventory()
//=======

//init.createStudent()

//>>>>>>> 31850c54168c42087c2fe8b73d77b82118116d3d
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use("/api", require('../mvc/routes/index'))

http.listen(config.port, () => {
  console.log('Server is running in port', config.port);
});
