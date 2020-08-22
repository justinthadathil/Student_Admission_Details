const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentDB', {useNewUrlParser: true});

mongoose.connection
.once('open', () => {console.log('Database Connected')})
.on('error', error => {console.log('Error in Database Connection', error)});

module.exports = mongoose;
