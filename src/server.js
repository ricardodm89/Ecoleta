const express = require("express")
const server = express()

// configurar pasta "public"
server.use(express.static("public"))

//configurar caminhos da aplicação
//pagina inicial
//req: requisição, pedido
//res: resposta
server.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", function(req, res){
    res.sendFile(__dirname + "/views/create-point.html")
})

//iniciar servidor
server.listen(3000)