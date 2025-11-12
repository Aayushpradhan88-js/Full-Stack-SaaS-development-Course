const {DataTypes, Sequelize} = require("sequelize");
const {DB_URL} = require("../utils/env.js");

const sequelize = new Sequelize(DB_URL);

sequelize.authenticate()
    .then(() => {
        console.log("database connected successfully")
    }).catch((err) => {
        console.log("error", err.stack)
    })

const db = {
    Sequelize : sequelize,
    sequelize: sequelize
};

module.exports = {db}