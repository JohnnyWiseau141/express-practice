//import modules

import express from 'express'
import * as todoDb from './data/todo-db.js'

//create express app

const app = express()

//configure the app (app.set)

app.set("view engine", "ejs")

// mount middleware(app.use)

app.use(express.static('public'))

//mount routes

app.get("/", function(req, res) {
    res.redirect("/home")
})

app.get("/home", function(req, res) {
    res.render("home")
})

app.get('/todos', function(req, res) {
    todoDb.find({}, function(error, todos) {
        res.render('todos/index', {
            todos: todos,
            error: error
        })
    })
})

app.get("/doyouknowtheway", function(req, res) {
    res.redirect("/youdonotknowtheway")
})

app.get("/youdonotknowtheway", function(req, res) {
    res.render("youdonotknowtheway")
})

app.get("/connect4pylons", function(req, res) {
    res.render("connect4pylons")
})

//tell the app to listen on port 3000

app.listen(3000, function() {
    console.log("Listening on port 3000")
})

