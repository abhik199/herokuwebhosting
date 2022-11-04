const mongoose = require('mongoose')
const Reg= mongoose.Schema({
    name:String,
    username:String,
    contact:{
        type:String,
        unique:true
    },
    email:{
        type:{},
        unique :true
    },
    password: Number,String,
    confirm_password:Number,String,
    gender:String,
})
module.exports=mongoose.model('registration',Reg)