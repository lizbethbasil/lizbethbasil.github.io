const express = require("express");
const cors = require("cors");
const Authordata = require("./src/model/AuthorData");
const Bookdata = require("./src/model/BookData");

const app = new express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API
app.get('/authorlist', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    Authordata.find()
        .then(function (authors) {
            res.send(authors);
        })
});

app.post('/newauthor', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body);
    var author = {
        authorName: req.body.item.authorName,
        bestseller: req.body.item.bestseller,
        rating: req.body.item.rating,
        imageURL: req.body.item.imageURL
    }

    console.log("Hello");
    var authors = new Authordata(author);
    authors.save();
})

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

    console.log("Hello");
    var books = new Bookdata(book);
    books.save();
})

app.listen(5000, () => {
    console.log("Server up in Port# 5000 ");
});