const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use('/api/books', require('./routes/books.route'));


// mongoose.connect('mongodb://localhost:27017/books',{ useNewUrlParser: true });
mongoose.connect(`mongodb+srv://asadhm:${process.env.mongodb.password}@cluster0.jdmn4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{ useNewUrlParser: true });

app.listen(process.env.PORT || 5000, () => {
    console.log('Server started on port 5000');
});