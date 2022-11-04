const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/Enter_form",{

}).then(()=>{
    console.log("db connecated")
}).catch((e)=>{
    console.log("db is not connected")
    console.log(e)
})