const mongoose = require('mongoose');
const SubjectSchema = new mongoose.Schema({
    title:{type:String,required:true},
    name:{type:String,required:true},
    credits:{type:String,required:true},
    hours:{type:String,required:true},
    lecturer:{type:String,required:true}
});
module.exports = mongoose.model('Subject',SubjectSchema);