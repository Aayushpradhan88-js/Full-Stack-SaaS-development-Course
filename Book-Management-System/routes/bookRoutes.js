const bookRouter  = require('express').Router();
const { getAllBooks, addBook, updateBook, deleteBook } = require('../controllers/bookController');

bookRouter.route('/').get(getAllBooks).post(addBook);
bookRouter.route('/:id').patch(updateBook).delete(deleteBook);

module.exports = bookRouter;