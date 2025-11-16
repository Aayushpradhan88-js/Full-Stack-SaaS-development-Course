//CONTROLLER FILE

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
            message: `${bookauthor}, your ${bookname} book has been successfully published`,
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
    // const id = req.body.id;  // second method to access the id from body
    if (!bookname || !bookprice || !bookauthor || !bookgeneric) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    try {
        const existingBook = await db.books.findByPk(id)
        if (existingBook === null) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        if (bookname && bookname !== existingBook.bookname) {
            const dublicate = await db.books.findOne({
                where: { bookname }
            })
            if(dublicate){
                return res.status(401).json({
                    success: true,
                    message: `${dublicate} is already existed try another`
                })
            };
        };

        //@update - to update book details (PATCH request)
        const updateBookDetails = await db.books.update({
            bookname,
            bookprice,
            bookauthor,
            bookgeneric
        }, {
            where: {
                id
            }
        });
        if (!updateBookDetails) {
            return res.status(400).json({
                message: "Unable to update book details"
            })
        }

        return res.status(200).json({
            message: `${updateBookDetails.bookauthor} you're book details are updated successfully`,
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

//Single Fetch
const getBookId = async (req, res) => {
    const id = req.params.id; //@params - to get id from url
    try {
        //@findByPk - to get book by primary key
        const getId = await db.books.findByPk(id);
        if (!getId) {
            return res.status(404).json({
                success: false,
                message: "unable to find userId"
            })
        };

        //fetching user
        const fetchUser = await db.books.findOne({
            where: {
                id
            }
        });
        if (!fetchUser) {
            return res.status(404).json({
                success: false,
                message: "unable to fetch user data"
            })
        };
        const { bookauthor } = fetchUser;

        return res.status(200).json({
            success: false,
            message: `${bookauthor} you're books fetched successfully`,
            data: getId
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'internal server error!!'
        });
    };
};

//Delete book
const deleteBook = async (req, res) => {
    const id = req.params.id;
    try {
        //fetching book
        const fetchBook = await db.books.findOne({
            where: {
                id
            }
        });
        if (!fetchBook) {
            return res.status(404).json({
                message: "Book not found"
            })
        };

        const { bookauthor, bookname } = fetchBook;

        //@destroy - to delete item (DELETE request)
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

/*
@features
 - get book
 - get book with id
 - add book
 - update book with id
 - delete book with id
*/

module.exports = { getAllBooks, addBook, updateBook, getBookId, deleteBook } 