const sequelize = require("sequelize")

const User = new sequelize.define("user", {
    name:{
        type: sequelize.STRING,
        allowNull: false
    },
    aboutMe:{
        type: sequelize.TEXT,
        allowNull: false
    },
    position:{
        type: sequelize.INTEGER,
        defaultValue: 0,
    },
    profileImage:{
        type: sequelize.STRING,
        allowNull: false
    },
})

module.exports = User