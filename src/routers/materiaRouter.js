const express = require("express")
const router = express.Router()
const {createView, register} = require("../controllers/materiaControl")
router.get("/create", createView)
router.post("/register", register)

module.exports = router