const sequelize = require("sequelize")
const connection = require("../database/database")

connection.define("Activity", {
    title:{
        type: sequelize.STRING,
        allowNull: false
    },
    description:{
        type: sequelize.TEXT,
        allowNull: false
    },
    deliver:{
        type: sequelize.DATE,
        allowNull: true
    },
    sending:{
        type: sequelize.DATE,
        allowNull: false
    },
    bimester:{
        type:sequelize.INTEGER,
        allowNull: false
    },
    sender:{
        type:sequelize.STRING,
        allowNull: false
    },
    producer:{
        type: sequelize.STRING,
        allowNull: false
    }
})