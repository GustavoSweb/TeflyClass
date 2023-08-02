const express = require("express")
const app = express()
require("dotenv").config()
const ejs = require("ejs")

app.set("view engine", "ejs")
app.get("/", (req, res)=> {
    res.render("home.ejs")
})
const PORT = process.env.PORT || 8081
app.listen(PORT, ()=> {
    console.log("Rodando!! na porta: "+ PORT)
})