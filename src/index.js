const express = require("express")
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const router = require('../routes/rote')
const sendMoney = require('../routes/serviceurl')
require('./db/connect')
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.static('public'))


app.use("",router,sendMoney)



app.set("view engine" ,"hbs")
app.set("views","temp/views")
hbs.registerPartials('temp/partials')

app.listen(8200)