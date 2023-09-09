const express = require("express")
const router = express.Router()

// Model

const Materials = require("../models/Materials")

// Routes

const createView = (req, res)=>{
    res.render("admin/Materia/create")
}


const register = async (req, res)=>{
    var {name, important, description, teacher} = await req.body
    if (!description || !name || !teacher || !important) return res.redirect("/admin/materia/create")

    name = name.split(' ').join('-')

    try{
        Materials.create({name, important, description, teacher})
        res.redirect("/admin/materia/list") 
    }catch(err){
        console.log("Houve um erro"+err)
        res.redirect("/admin/materia/create") 
    }
}
const edit = async (req, res)=>{
    var {name, important, description, teacher, id} = await req.body
    if (!description || !name || !teacher || !important || !id) return res.redirect(`/admin/materia/edit/${id}`)

    name = name.split(' ').join('-')
    parseInt(important)
    
    try{
        const dados = await Materials.findOne({where:{id}})
        if(!dados) return res.redirect("/admin/materia/list")
        dados.update({
            name,
            teacher,
            description,
            important
        })
        res.redirect("/admin/materia/list") 
    }catch(err){
        console.log("Houve um erro"+err)
        res.redirect(`/admin/materia/edit/${id}`) 
    }
}

const editView = async (req, res)=>{
    const {id} = req.params
    try{
        const dados = await Materials.findOne({where:{id}})
        res.render("admin/Materia/edit", {dados})
    }catch(err){
        console.log("Houve um erro"+ err)
        res.redirect("/admin/materia/list")
    }
}

const listMaterials = async (req, res)=>{
    try{
        const dados = await Materials.findAll({order:[["important", "ASC"]]})
        res.render("admin/Materia/index", {dados})
        
    }catch(err){
        console.log("Houve um erro em Listar as materias!! "+err)
        res.redirect("/") 
    }
}
const del = async (req, res)=>{
    const {id} = req.body

    const dados = await Materials.findOne({where:{id}})
    if(!dados || !id) return res.redirect("/admin/materia/list")
    try{
        dados.destroy()
        res.redirect("/admin/materia/list")
    }catch(err){
        console.log("Houve um erro em deletar!! "+err)
        res.redirect("/admin/materia/list")
    }
}
module.exports = {
    createView,
    register,
    edit,
    editView,
    del,
    listMaterials
}