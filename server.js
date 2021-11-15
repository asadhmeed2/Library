const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.get('/', (req, res)=>{
    res.send('<h1>asad</h1>')
})
app.use('/api/books', require('./routes/books.route'));


mongoose.connect(`mongodb+srv://asadhm:0147asad@cluster0.jdmn4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{ useNewUrlParser: true });

app.listen(process.env.PORT || 5000, () => {
    console.log('Server started on port 5000');
});