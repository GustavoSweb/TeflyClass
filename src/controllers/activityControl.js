const Activity = require("../models/Activity")
const Users = require("../models/Users")

const createView = (req, res)=>{
    res.render("admin/Activity/create")
} 


module.exports = {
    createView
}