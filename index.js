<<<<<<< HEAD
require("dotenv").config()
const sequelize = require("sequelize")
const express = require("express")
const app = express()

const connection = require("./src/database/database")
const activity = require("./src/models/Activity")
const materials = require("./src/models/Materials")
const projects = require("./src/models/Projects")

const ejs = require("ejs");

(async ()=>{
    try{
        await connection.authenticate()
        console.log("Banco de dados conectado")
    }catch(err){
        console.log("Houve um erro", err)
    }
})();
=======
const express = require("express")
const app = express()
require("dotenv").config()
const ejs = require("ejs")
>>>>>>> 4583129a15763a46e39944fbe6b906a823b05308

app.set("view engine", "ejs")
app.get("/", (req, res)=> {
    res.render("home.ejs")
})
const PORT = process.env.PORT || 8081
app.listen(PORT, ()=> {
    console.log("Rodando!! na porta: "+ PORT)
})