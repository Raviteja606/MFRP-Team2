const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    Firstname:{type:String},
    Lastname:{type:String},
    Email:{type:String},
    dob:{type:Date},
    contactno:{type:Number},
    Pwd:{type:String},
    cnfPwd:{type:String},
    role:{type:String},
})

module.exports = mongoose.model('User',userSchema)