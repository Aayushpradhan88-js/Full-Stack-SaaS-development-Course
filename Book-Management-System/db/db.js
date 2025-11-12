const {DataTypes, Sequelize} = require("sequelize");
const {DB_URL} = require("../utils/env.js");

const sequelize = new Sequelize(DB_URL);
console.log("sequelize", DB_URL)

sequelize.authenticate()
    .then(() => {
        console.log("database connected successfully", DB_URL)
    }).catch((err) => {
        console.log("error", err.stack)
    })

const db = { // db bhadoo maa create gareko model haru save hunxa
    Sequelize : sequelize,
    sequelize: sequelize
};


/*IMPORTING BOOK MODEL*/
// db.book = require('../models/book.model')(sequelize, DataTypes)

const bookModel = require('../models/book.model.js');
const res = bookModel(sequelize, DataTypes);
db.book = res;

//---MIGRATION DATABASE---//
sequelize.sync({force:false})
.then(() => {
    console.log("database migration successful");
})

module.exports = {db}