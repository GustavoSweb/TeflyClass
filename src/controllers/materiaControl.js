const express = require("express")
const router = express.Router()

const createView = (req, res)=>{
    res.render("admin/Materia/create")
}
const register = (req, res)=>{
    const {name, nivel, description, teacher} = req.body
    console.log(req.body)
    if (teacher || name || nivel || description == '' || undefined || null) res.redirect("/materia/create")
    
    res.redirect("/") 
}


module.exports = {
    createView,
    register
}