
require("dotenv").config()
const sequelize = require("sequelize")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const connection = require("./src/database/database")
const activity = require("./src/models/Activity")
const materials = require("./src/models/Materials")
const projects = require("./src/models/Projects")
// Configs

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// Routers

app.use("/admin/materia", require("./src/routers/materiaRouter"))


const ejs = require("ejs");

(async ()=>{
    try{
        await connection.authenticate()
        console.log("Banco de dados conectado")
    }catch(err){
        console.log("Houve um erro", err)
    }
})();
app.set("view engine", "ejs")
const PORT = process.env.PORT || 8081
app.listen(PORT, ()=> {
    console.log("Rodando!! na porta: "+ PORT)
})