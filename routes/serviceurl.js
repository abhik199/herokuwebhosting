const express = require('express')
const ser = express.Router()

ser.get('/services/spend_monry',(req,res)=>{
    res.render('send_money')
})
ser.get('/services/set_budget',(req,res)=>{
    res.render('budget')
})
ser.get('/services/security',(req,res)=>{
    res.render('security')
})
module.exports=ser