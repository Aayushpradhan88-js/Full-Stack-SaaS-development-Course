
/*
SYNTAX: @define - .define(modelname:string, attributes:object, options:object)
*/

const bookModel = (sequelize, DataTypes) => {
    const book = sequelize.define( // .define() fnx le table create garxa
        "Book",  //---model name---//
        { //---attributes--//
            bookusername: {
                type: DataTypes.STRING,
                allowNull: false //---data client bata aauda khali hunuhudainaa---//
            },
            bookprice: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            bookauthor: {
                type: DataTypes.STRING,
                allowNull: false
            },
            bookgeneric: {
                type: DataTypes.STRING,
                defaultValue: "None"
            }
        }
    )

    return book;
};

module.exports = bookModel;