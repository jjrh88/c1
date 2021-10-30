const express = require('express')
const app = express()
const http = require('http').Server(app)
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config/config')
const db = require("./database/database")


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


http.listen(config.port, () => {
  console.log('Server is running in port', config.port);
});
