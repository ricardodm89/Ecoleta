const express = require("express")
const server = express()

// configurar pasta "public"
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

//configurar caminhos da aplicação
//pagina inicial
//req: requisição, pedido
//res: resposta

// ROTAS
server.get("/", function(req, res){
    return res.render("index.html", {title:"nunjuncks"})
})

server.get("/create-point", function(req, res){
    return res.render("create-point.html")
})

server.get("/search", function(req, res){
    return res.render("search-results.html")
})

//iniciar servidor
server.listen(3000)