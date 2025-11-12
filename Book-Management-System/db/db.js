const {DataTypes, Sequelize} = require("sequelize");
const {DB_URL} = require("../utils/env.js");

const sequelize = new Sequelize(DB_URL);

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
const bookRes = bookModel(sequelize, DataTypes);
db.book = bookRes;

const userModel = require('../models/user.model.js');
const userRes = userModel(sequelize, DataTypes);
db.user = userRes

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
sequelize.sync({alter:false}) 
.then(() => {
    console.log("Database is successfully migrated");
})

// if(migration){
//     console.log("Database is successfully migrated");
// } else {
//     console.error("failed to migrate the database", error.stack);
// }

module.exports = {db}