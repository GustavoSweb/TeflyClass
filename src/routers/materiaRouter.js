const express = require("express")
const router = express.Router()
const {listMaterials, createView, register, edit, editView, del} = require("../controllers/materiaControl")

router.get("/list", listMaterials)
router.get("/create", createView)
router.get("/edit/:id", editView)

router.post("/delete", del)
router.post("/register", register)
router.post("/edit", edit)
module.exports = router