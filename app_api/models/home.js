var mongoose = require('mongoose');

var contentSchema = new mongoose.Schema({
    
    href:String
});

var wholeSchema = new mongoose.Schema({
    title:String,
    content:[contentSchema]
});

mongoose.model('contents', wholeSchema);