/*
@features: 
      create, read, readid,updateid, deleteid, 
*/

const { db } = require("../db/db")

const getAllBooks = async (_, res) => {
    const getBooks = await db.books.findAll();
    if (!getBooks) {
        return res.status(404).json({
            success: false,
            message: 'failed to get the data'
        });
    };

    return res.status(200).json({
        success: true,
        message: 'Successfully recived data',
        data: getBooks
    });
};

const postBook = async (req, res) => {
    const { bookname, bookprice, bookauthor, bookgeneric } = req.body;
    if (
        [bookname, bookprice, bookauthor, bookgeneric].some((fields) => fields.trim() === '')
    ) {
        return res.status(401).json({
            success: false,
            message: 'all fields are required'
        });
    };

    const existedBookName = await db.books.findOne({ where: { bookname } });
    if (existedBookName) {
        return res.status(402).json({
            success: false,
            message: `${bookname} is already taken by author`
        });
    };

    if (10 < bookprice) {
        return res.status(402).json({
            success: false,
            message: 'Enter at least RS.10 then above'
        });
    };

    const createBook = await db.books.create({
        bookname,
        bookprice,
        bookauthor,
        bookgeneric
    });
    if (!createBook) {
        return res.status(400).json({
            success: false,
            message: 'failed to upload book in database',
        });
    };

    return res.status(200).json({
        success: true,
        message: 'successfully upload book in database',
        data: createBook
    });
};

module.exports = { getAllBooks, postBook }