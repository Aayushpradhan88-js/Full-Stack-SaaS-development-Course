const { DataTypes, Sequelize } = require("sequelize");
const { DB_URL } = require("../utils/env.js");

const sequelize = new Sequelize(DB_URL);

//Supabase connection 
sequelize.authenticate()
    .then(() => {
        console.log("database connected successfully")
    }).catch((err) => {
        console.log("database connection error", err.stack)
    });

const db = {
    Sequelize: sequelize, //db bhadoo maa create gareko model haru save hunxa
    sequelize: sequelize

};

/*IMPORTING BOOK MODEL*/
db.books = require('../models/book.model.js')(sequelize, DataTypes)
db.user = require('../models/user.model.js')(sequelize, DataTypes);

//---MIGRATION DATABASE---//

/*
@force:false - update the database and delete the all data of column
*/
// sequelize.sync({force:false}) 
// .then(() => {
//     console.log("database migration successful");
// })


/*
@alter:false - only update the column name
*/
sequelize.sync({ alter: true })
    .then(() => {
        console.log("Database is successfully migrated");
    })

module.exports = { db }