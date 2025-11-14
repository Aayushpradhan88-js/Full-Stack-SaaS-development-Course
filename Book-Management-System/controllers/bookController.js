const { where } = require('sequelize');
const { db } = require('../db/db');

//Get all books
const getAllBooks = async (_, res) => {

    //@findAll - to fetch all books
    const allBook = await db.books.findAll()
    return res.status(200).json({
        message: "Books fetched successfully",
        data: allBook
    });

}

//Add a new book
const addBook = async (req, res) => {
    const { bookname, bookprice, bookauthor, bookgeneric } = req.body;
    if (!bookname || !bookprice || !bookauthor || !bookgeneric) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    };
    try {
        //@findOne - to check if book already exists
        const existingBook = await db.books.findOne({
            where: { bookname: bookname }
        });
        if (existingBook) {
            return res.status(400).json({
                success: false,
                message: "Book with this name already exists"
            });
        };

        //@create - to add new book (POST request)
        const newBook = await db.books.create({
            bookname,
            bookprice,
            bookauthor,
            bookgeneric
        });
        if (!newBook) {
            return res.status(400).json({
                success: false,
                message: "Failed to create book"
            });
        };

        return res.status(201).json({
            success: true,
            message: "Book published successfully",
            data: newBook
        });
    } catch (error) {
        console.error("Error creating book:", error.stack);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

//Update book
const updateBook = async (req, res) => {
    const { bookname, bookprice, bookauthor, bookgeneric } = req.body;
    const id = req.params.id; //@params - to get id from url

    try {
        //@update - to update book details
        const updateBookDetails = await db.books.update({
            bookname,
            bookprice,
            bookauthor,
            bookgeneric
        }, {
            where: {
                id: id
            }
        });
        if (!updateBookDetails) {
            return res.status(400).json({
                message: "Unable to update book details"
            })
        }

        return res.status(200).json({
            message: "Book details updated successfully",
            data: updateBookDetails
        })
    } catch (error) {
        console.error("Error updating book:", error.stack);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

//Delete book
const deleteBook = async (req, res) => {
    const id = req.params.id;
    try {
        //fetching book
        const fetchBook = await db.books.findOne({
            where: {
                id: id
            }
        });
        if (!fetchBook) {
            return res.status(404).json({
                message: "Book not found"
            })
        };

        const { bookauthor, bookname } = fetchBook;

        //@destroy - to delete item
        const deleteBook = await db.books.destroy({
            where: {
                id: id
            }
        })
        if (!deleteBook) {
            return res.status(400).json({
                message: "Unable to delete the book"
            })
        }

        return res.status(200).json({
            message: `${bookauthor}, your ${bookname}book has been deleted successfully`,
            data: {
                bookauthor,
                bookname
            }
        })
    } catch (error) {
        console.error("Error deleting book:", error.stack);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

module.exports = { getAllBooks, addBook, updateBook, deleteBook } 