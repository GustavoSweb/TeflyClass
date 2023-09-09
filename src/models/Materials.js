const sequelize = require("sequelize")
const connection = require("../database/database")
const Activity = require("./Activity")
const Projects = require("./Projects")
const Materials = connection.define("materials", {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    description:{
        type: sequelize.TEXT,
        allowNull: false
    },
    important:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    teacher: {
        type: sequelize.STRING,
        allowNull: false
    }
})

Activity.belongsTo(Materials)
Projects.belongsTo(Materials)
Materials.hasMany(Activity)
Materials.hasMany(Projects)

Materials.sync({force:false})
module.exports = Materials