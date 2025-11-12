//----Model(Singular name 'User')-----//
//Syntax: sequelize.define(modelname, attributes, options)
// const {Sequelize, DataTypes} = require('sequelize');

// Sequelize.define

//----Table(Singular name 'Users')-----//

// sequalize constructor

// constructor Delete(username) {
//     const {username} = this.username
// }


// const Define = function sum(modelname,attributes,options) {
//     const model = modelname
//     const attribute = attributes
//     const option = options + attribute + model

//     return model, attribute, option
// }

// const result = Define.sum("User", "aayush@gmail.com", "Date now: 2082-07-28");

// console.log("Users details:", result);


const { Sequelize, DataTypes, Model } = require('sequelize');
const { DB_URL } = require('../utils/env');
const sequalize = new Sequelize(DB_URL);

//---Defining the database model---//
// const User = sequalize.define(
//     'User', //---Model name---//
//     { //---Attributes---//
//         username: {
//             type: DataTypes.STRING,
//             required: DataTypes.BOOLEAN(true)
//         },
//         email: {
//             type: DataTypes.STRING,
//             required: DataTypes.BOOLEAN(true)
//         },
//         password: {
//             type: DataTypes.STRING,
//             required: DataTypes.BOOLEAN(true)
//         },
//     },
//     { //---Options---//
//         createdAt: DataTypes.DATE,
//         updatedAt: DataTypes.DATEONLY
//     }
// )


class User extends Model{}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            required: DataTypes.BOOLEAN(true)
        },
    },
    {sequalize}
)