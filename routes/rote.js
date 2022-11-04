const express = require('express')
const expo = express.Router()
const connect = require('../models/registration')
const contact = require('../models/contact')


expo.get('/', (req, res) => {
    res.render('index')
})
expo.get("/registration", (req, res) => {
    res.render('registration')

})
expo.get("/login", (req, res) => {
    res.render('login')
})
expo.get("/services", (req, res) => {
    res.render('services')
})
expo.get("/contact", (req, res) => {
    res.render("contact")
})
expo.get("/about_us", (req, res) => {
    res.render("about_us")
})
expo.post("/registration", (req, res) => {
    try {
        const password = (req.body.password)
        const confirm_password = (req.body.confirm_password)
        console.log(req.body)
        if (password == confirm_password) {
            const data = connect.create(req.body)
            console.log("data store done")
            res.redirect("login")
        }
        else {
            console.log("data store failed")
            res.redirect("registration")
        }
        res.redirect("login")
    } catch (err) {
        console.log(err)
    }
    res.end()

})

expo.post("/contact", (req, res) => {
    try {
        const data = contact.create(req.body)
    }
    catch (error) {
        console.log(error)
    }
    res.end()


})
expo.post("/login", async (req, res) => {
    try {
        const email = (req.body.email)
        const password = (req.body.password)
        const usermail = await connect.findOne({ email: email })
        if (usermail.password == password) {
            res.redirect("index")
            
            // res.send("done")
        }
        else {
            res.send("not math")
        }
        res.end()
    }
    catch (e){}

})
module.exports = expo