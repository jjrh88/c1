const mongoose = require('mongoose')
const config = require('../config/config')

//mongoose.Promise = global.Promise;
//mongoose.set('useFindAndModify', false);
// {  useUnifiedTopology: true , useNewUrlParser: true ,  useCreateIndex: true }
mongoose.connect(config.Urldb)
 .then(db => console.log("Connect to DB"))
 .catch(err => console.log(err))

module.exports = mongoose
