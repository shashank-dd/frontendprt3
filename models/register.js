const mongoose = require('mongoose');
const loginschema = new mongoose.Schema({
    email :{type:String,required:true,unique:true},
    password:{type:String,required:true},
    })
const Register = mongoose.model("regis", loginschema);
module.exports = Register;