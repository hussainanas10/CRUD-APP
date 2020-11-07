const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/NodeProject', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) throw err;
    console.log("Connection setup successfully");
});

require('./data');