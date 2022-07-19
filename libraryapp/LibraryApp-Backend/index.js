const express = require("express");
const cors = require("cors");
const Bookdata = require("./src/model/BookData");

const app = new express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API
app.get('/booklist', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    Bookdata.find()
        .then(function (books) {
            res.send(books);
        })
});

app.post('/newbook', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body);
    var book = {
        bookCode: req.body.item.bookCode,
        bookName: req.body.item.bookName,
        authorName: req.body.item.authorName,
        description: req.body.item.description,
        rating: req.body.item.rating,
        imageURL: req.body.item.imageURL
    }

    console.log("New Book Added");
    var books = new Bookdata(book);
    books.save();
})

app.listen(5000, () => {
    console.log("Server up in Port# 5000 ");
});