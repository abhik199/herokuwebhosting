const mongoose = require('mongoose')
const con = mongoose.Schema({
    name:String,
    email:{},
    contact:Number,
    message:{},
})
module.exports=mongoose.model("contact",con)