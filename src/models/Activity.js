const sequelize = require("sequelize")
const connection = require("../database/database")

<<<<<<< HEAD
const Activity = connection.define("activity", {
=======
connection.define("Activity", {
>>>>>>> 4583129a15763a46e39944fbe6b906a823b05308
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
<<<<<<< HEAD
})
Activity.sync({force:false})

module.exports = Activity
=======
})
>>>>>>> 4583129a15763a46e39944fbe6b906a823b05308
