//ROUTER FILE

const bookRouter = require('express').Router();
const { getAllBooks,getAllBooksById, postBook, editBookDetails, deleteBook } = require('../controllers/bookController');

bookRouter.route('/').get(getAllBooks).post(postBook);
bookRouter.route('/:id').get(getAllBooksById).patch(editBookDetails).delete(deleteBook);

module.exports = bookRouter;