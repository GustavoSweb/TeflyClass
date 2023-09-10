const express = require("express")
const router = express.Router()
const {createView} = require("../controllers/activityControl")

router.get("/create", createView)



module.exports = router