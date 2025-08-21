const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://seu_usuario:sua_senha@localhost:27017/?authSource=admin");

//Habilitar o CORS
app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//Criar rotas
const index = require("./routes/index")

app.use("/", index)

module.exports = app;