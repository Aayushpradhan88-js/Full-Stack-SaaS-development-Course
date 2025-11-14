const express = require('express');
const dotenv = require('dotenv');
const { db } = require('./db/db')
const app = express();
dotenv.config();

require('./db/db')

app.use(express.json()); //parser the JSON data from the body.
app.use(express.urlencoded({ extended: true }));

//-----Get all books-----//
app.get("/api/books", async (req, res) => {

    const allBook = await db.books.findAll()
    res.json({
        message: "Books fetched successfully",
        data: allBook
    })

})

//-----Get all books-----//
app.post("/api/book", async (req, res) => {

    try {
        const { bookname, bookprice, bookauthor, bookgeneric } = req.body;

        // Validate required fields
        if (!bookname || !bookprice || !bookauthor || !bookgeneric) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existingBook = await db.books.findOne({ bookname: bookname });
        // Or simply: const existingBook = await db.books.findOne({ bookname });

        if (existingBook) {
            return res.status(409).json({
                success: false,
                message: "Book with this name already exists"
            });
        }

        // Create new book
        const newBook = await db.books.create({
            bookname,
            bookprice,
            bookauthor,
            bookgeneric
        });

        return res.status(201).json({
            success: true,
            message: "Book published successfully",
            data: newBook
        });

    } catch (error) {
        console.error("Error creating book:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

//-----Get all books-----//
app.patch("/api/books/:id", (req, res) => {
    res.json({
        message: "Book Title updated successfully"
    })
})

//-----Get all books-----//
app.delete("/api/books/:id", (req, res) => {
    res.json({
        message: "You're book deleted successfully from the store"
    })
})

//db call
// db;

//server port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${3000}`);
});