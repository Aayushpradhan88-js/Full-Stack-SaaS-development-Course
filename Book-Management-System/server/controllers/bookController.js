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

const getAllBooksById = async (req, res) => {
    const urlId = req.params.id;
    if (!urlId) {
        return res.json({
            message: "falied to get id"
        });
    };

    try {
        const fetchBooks = await db.books.findByPk(urlId);
        if (!fetchBooks) {
            return res.status(403).json({
                success: false,
                message: "Book is not existed in database"
            });
        };

        const { bookauthor } = fetchBooks;

        return res.status(200).json({
            success: true,
            message: `${bookauthor} you're book fetched successfully`,
            data: fetchBooks
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.stack
        });
    }
}

const postBook = async (req, res) => {
    const { bookname, bookprice, bookauthor, bookgeneric } = req.body;
    if (
        [bookname, bookprice, bookauthor, bookgeneric].some((fields) => fields.trim === '')
    ) {
        return res.status(401).json({
            success: false,
            message: 'all fields are required'
        });
    };
    const minBookPrice = 50;

    const existedBookName = await db.books.findOne({ where: { bookname } });
    if (existedBookName) {
        return res.status(402).json({
            success: false,
            message: `${bookname} is already taken by author`
        });
    };

    //@feature have issue fix it
    if (minBookPrice < bookprice) {
        return res.status(402).json({
            success: false,
            message: `${bookprice} price is very low`
        });
    };

    try {
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
            message: `${bookauthor} you're book has been successfully published`,
            data: createBook
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.stack
        });
    }
};

const editBookDetails = async (req, res) => {
    const { bookname, bookprice, bookauthor, bookgeneric } = req.body;
    const minBookPrice = 50;
    const urlId = req.params.id;
    if (!urlId) {
        return res.json({
            message: "failed to get id"
        });
    };

    try {
        const fetchBooks = await db.books.findByPk(urlId);
        if (!fetchBooks) {
            return res.status(403).json({
                success: false,
                message: "unable to fetch book"
            });
        };

        if (bookname && bookname === fetchBooks.bookname) {
            const sameBook = await db.books.findOne({ where: { bookname } });
            if (sameBook) {
                return res.status(405).json({
                    message: `${bookname} is already registered`
                })
            }
        };
        if (minBookPrice > bookprice) {
            return res.status(402).json({
                message: `${bookprice} price is very low`
            })
        };

        //@TODO: IF BOOK PRICE IS HIGH THEN 

        const updateBook = await db.books.update({
            bookname,
            bookprice,
            bookauthor,
            bookgeneric
        }, { where: { id: urlId } });
        if (!updateBook) {
            return res.status(403).json({
                success: false,
                message: "unable to updateBook"
            });
        };

        const updatedDetails = await db.books.findOne({ where: { bookname, bookauthor } })
        return res.status(200).json({
            success: true,
            message: `${updatedDetails.bookauthor} you're book ${updatedDetails.bookname} is successfully updated`,
            data: updatedDetails
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.stack
        });
    }

}

const deleteBook = async (req, res) => {
    const urlId = req.params.id; //first we fetch the data
    if (!urlId) {
        return res.status(402).json({
            success: false,
            message: "cannot get url"
        });
    };
    try {
        const existingData = await db.books.findByPk(urlId);
        if (!existingData) {
            return res.send(404).json({
                message: "you're data is not available"
            });
        };

        const deleteData = await db.books.destroy({ where: { id: urlId } });
        if (!deleteData) {
            return res.status(400).json({
                success: false,
                message: "unable to delete book"
            });
        };

        return res.status(200).json({
            success: true,
            message: "you're book has been successfully deleted!!"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.stack
        });
    }
}

module.exports = { getAllBooks, postBook, getAllBooksById, editBookDetails, deleteBook }