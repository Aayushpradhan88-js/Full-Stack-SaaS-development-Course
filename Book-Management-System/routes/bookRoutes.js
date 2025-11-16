//ROUTER FILE

const bookRouter = require('express').Router();
const { getAllBooks, postBook } = require('../controllers/bookController');

bookRouter.route('/').get(getAllBooks).post(postBook);
// bookRouter.route('/:id').get(getBookId).patch(updateBook).delete(deleteBook);

module.exports = bookRouter;