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
    const { bookname, bookprice, bookauthor, bookgeneric } = req.body
    // console.log(bookDetails.bookname) //for specific object key
    // console.log(req.body) //getting body details 

   const createBook = await db.books.create({
        bookname, bookprice, bookauthor, bookgeneric
    })
    res.json({
        message: "Books uploaded successfully",
        data: createBook
    })
})

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