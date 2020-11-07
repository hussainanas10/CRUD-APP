var mongoose=require('mongoose');
var addstudentschema=new mongoose.Schema({
    Firstname:{type:String},
    email:{type:String},
    Father:{type:String},
    Phone:{type:String}


});
var Students=mongoose.model('student',addstudentschema);
module.exports=Students;