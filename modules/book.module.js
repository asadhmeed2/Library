const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true,
        max:new Date().getFullYear()
    },
    language: {
        type: String,
        required: true,
        maxLength:2,
    },
    reating:{
        type: Number,
        max:5,
        min:0,
    }

});

const Book = mongoose.model('Book', bookSchema);

module.exports = {
    Book
}