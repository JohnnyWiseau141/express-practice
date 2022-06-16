//import modules

import express from 'express'

//create express app

const app = express()

//configure the app (app.set)

app.set("view engine", "ejs")

// mount middleware(app.use)

app.use(express.static('public'))

//mount routes

app.get("/", function(req, res) {
    res.send("<h1>basic response for basic learning</h1>")
})

app.get("/home", function(req, res) {
    res.render("home")
})

app.get("/doyouknowtheway", function(req, res) {
    res.redirect("/youdonotknowtheway")
})

app.get("/youdonotknowtheway", function(req, res) {
    res.render("youdonotknowtheway")
})

//tell the app to listen on port 3000

app.listen(3000, function() {
    console.log("Listening on port 3000")
})

