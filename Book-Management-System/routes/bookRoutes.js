//ROUTER FILE

const bookRouter = require('express').Router();
const { getAllBooks,getAllBooksById, postBook } = require('../controllers/bookController');

bookRouter.route('/').get(getAllBooks).post(postBook);
bookRouter.route('/:id').get(getAllBooksById);
// .patch(updateBook).delete(deleteBook);

module.exports = bookRouter;