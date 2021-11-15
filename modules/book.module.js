const { match } = require('assert');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        match:/^([a-zA-Z])*$/
    },
    author: {
        type: String,
        required: true,
        match:/^([a-zA-Z])*$/
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
        match:/^([a-zA-Z])*$/
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