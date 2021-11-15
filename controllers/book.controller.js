const { throws } = require('assert');
const bookModel = require('../modules/book.module');


const getAllBooks =  (req, res) => {
    bookModel.Book.find({},(err, data)=>{
        if (err) {
            res.status(404).send('error data not found');
            throw err;
        }
        return res.status(200).send(data)
    });
}
const getBooksByYear =  (req, res) => {
    bookModel.Book.find({year: req.params.year},(err, data)=>{
        if (err) {
            res.status(404).send('error data not found');
            throw err;
        }
        return res.status(200).send(data)
    });
}
const addNewBook = (req, res) => {
    const {bookName, author, language, releaseYear,reating} = req.body;
    if(!(bookName&&author&&language.length === 2&&releaseYear<= new Date().getFullYear()&&reating<=5&&reating>=0)){
       return res.status(406).json('error one of the filed are missing')
    }
    const book = new bookModel.Book({
        bookName: bookName,
        author: author,
        releaseYear: releaseYear,
        language: language,
        reating:reating
    })


    book.save((err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(200).send(data);
    });


}

const deleteBook = (req,res)=>{
    const {id} = req.params;
    bookModel.Book.findByIdAndDelete(id, (err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(200).send(data);
    });
}
const updateBookById = (req,res)=>{
    const {id} = req.params;
    bookModel.Book.findByIdAndUpdate(id,req.body,{new:true}, (err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(201).send(data);
    });
}

module.exports = {
    getAllBooks,
    addNewBook,
    deleteBook,
    updateBookById,
    getBooksByYear
}