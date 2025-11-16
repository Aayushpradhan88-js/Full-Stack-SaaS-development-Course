//ROUTER FILE

const bookRouter = require('express').Router();
const { getAllBooks, addBook, updateBook, getBookId, deleteBook } = require('../controllers/bookController');

bookRouter.route('/').get(getAllBooks).post(addBook);
bookRouter.route('/:id').get(getBookId).patch(updateBook).delete(deleteBook);

module.exports = bookRouter;