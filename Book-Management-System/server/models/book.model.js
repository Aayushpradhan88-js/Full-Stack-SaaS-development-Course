
/*
SYNTAX: @define - .define(modelname:string, attributes:object, options:object)
*/

const books = (sequelize, DataTypes) => {
    const book = sequelize.define( // .define() fnx le table create garxa
        "Book",  //---model name---//
        { //---attributes--//
            bookname: {
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
        },
        { //---Options---//
            TimeStamp: true
        }
    )

    return book;
};

module.exports = books;