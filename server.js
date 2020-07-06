const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const curso = require("./data")

server.use(express.static('public'))

server.set("views engine, njk")


nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("about.njk")
})

server.get("/courses", function(req, res){
    return res.render("courses.njk", {itens: curso})
})

server.get("/starter", function(req, res){
    return res.render("starter.njk")
})

server.get("/launchbase", function(req, res){
    return res.render("launchbase.njk")
})

server.get("/gostack", function(req, res){
    return res.render("gostack.njk")
})
server.get("/courses/:id", function(req, res){
    
    const id = req.params.id


    const card = curso.find(function(card){
        if(card.id == id){
            return true
        }
    })

    if(!card){
        return res.send("Video not found!")
    }
    
    
    /* return res.render(`${id}`) */

})

server.listen(3000, function(){
    console.log("server is running")
})

/* Erro 404 pagina fax nao existente */


server.use(function(req, res){
    res.status(404).render("not-found.njk")
})