const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const curso = require("./data")

server.use(express.static('public'))

server.set("views engine, njk")


nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res){
    return res.render("about.njk")
})

server.get("/courses", function(req, res){
    return res.render("courses.njk", {itens: curso})
})

server.listen(3000, function(){
    console.log("server is running")
})

/* Erro 404 pagina fax nao existente */


server.use(function(req, res){
    res.status(404).render("not-found.njk")
})