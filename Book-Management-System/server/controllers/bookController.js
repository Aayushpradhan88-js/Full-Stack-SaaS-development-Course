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
                message: "unable to fetch book"
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

    const existedBookName = await db.books.findOne({ where: { bookname } });
    if (existedBookName) {
        return res.status(402).json({
            success: false,
            message: `${bookname} is already taken by author`
        });
    };

    if (10 > bookprice) {
        return res.status(402).json({
            success: false,
            message: 'Enter at least RS.10 then above'
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
    const minPriceValue = 50;
    const urlId = req.params.id;
    if (!urlId) {
        return res.json({
            message: "failed to get id"
        });
    };

    const fetchBooks = await db.books.findByPk(urlId);
    if (!fetchBooks) {
        return res.status(403).json({
            success: false,
            message: "unable to fetch book"
        });
    };

    if (bookname && bookname === fetchBooks.bookname) {
        const sameBook = await db.books.findOne(bookname);
        if (sameBook) {
            return res.status(405).json({
                message: "book name is already registered"
            })
        }
    };
    if(minPriceValue < bookprice || bookprice === ''){
        return res.status(402).json({
            message: `${bookprice} is very low price`
        })
    }

    //@TODO: IF BOOK PRICE IS HIGH THEN 

    const updateBook = db.books.update({
        bookname, bookprice, bookauthor, bookgeneric
    }, { where: { id: userId } });
    if (!updateBook) {
        return res.status(403).json({
            success: false,
            message: "unable to updateBook"
        });
    };

    const bookauthorname = updateBook.bookauthor;

    return res.status(200).json({
        success: true,
        message: `${bookauthorname} you're successfully updated`,
        data: updateBook
    });

}

const deleteBook = async (req, res) => {
    const urlId = req.params.id; //first we fetch the data
    if (!urlId) {
        return res.status(402).json({
            success: false,
            message: "cannot get url"
        })
    }

    const existingData = await db.books.findByPk(urlId);

}

module.exports = { getAllBooks, postBook, getAllBooksById, editBookDetails }