//import modules

import express from 'express'

//create express app

const app = express()

//configure the app (app.set)


// mount middleware(app.use)

//mount routes

app.get("/", function(req, res) {
    res.send("<h1>basic response for basic learning</h1>")
})

app.get("/hallo", function(req, res) {
    res.send("<h1>Hello there general greivous! Adding more for pushing and commiting purposes.</h1>")
})

app.get("/doyouknowtheway", function(re, res) {
    res.redirect("/youdonotknowtheway")
})

app.get("/youdonotknowtheway", function(req, res) {
    res.send("<h1>HEY CORTANA PLAY GOD SHATTERING STAR</h1>")
})

//tell the app to listen on port 3000

app.listen(3000, function() {
    console.log("Listening on port 3000")
})

