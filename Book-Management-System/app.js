const express = require('express')
const dotenv = require('dotenv')
const {db} = require('./db/db.js')
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-----Get all books-----//
app.get("/api/books", (req, res) => {
    res.json({
        message: "Books fetched successfully"
    })
})

//-----Get all books-----//
app.post("/api/book", (req, res) => {
    res.json({
        message: "Books uploaded successfully"
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
 
db;

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${3000}`);
});

console.log("backend development");