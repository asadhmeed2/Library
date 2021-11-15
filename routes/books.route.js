const express = require('express');
const bookController = require('../controllers/book.controller')
const router = express.Router();


router.get('/', (req, res) => {
    bookController.getAllBooks(req, res);
}).post('/', (req, res) => {
    bookController.addNewBook(req, res);
}).delete('/:id', (req, res) => {
    bookController.deleteBook(req, res);
}).put('/:id', (req, res) => {
    bookController.updateBookById(req, res);
}).get('/:year', (req, res) => {
    bookController.getBooksByYear(req, res);
});

module.exports = router;