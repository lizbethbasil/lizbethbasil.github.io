const express = require("express");
const cors = require("cors");
const Authordata = require("./src/model/AuthorData");
const Bookdata = require("./src/model/BookData");

// added
const path = require("path");
app.use(express.static('./dist/library-app-frontend'));
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/library-app-frontend/index.html'));
});
// added

const app = new express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API
<<<<<<< HEAD:index.js
app.get('/api/booklist', function (req, res) {
=======
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
        bestSeller: req.body.item.bestSeller,
        rating: req.body.item.rating,
        imageURL: req.body.item.imageURL
    }

    console.log("New Author Added");
    var authors = new Authordata(author);
    authors.save();
})

app.get('/booklist', function (req, res) {
>>>>>>> parent of 81fe948 (updates):libraryapp/LibraryApp-Backend/index.js
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    Bookdata.find()
        .then(function (books) {
            res.send(books);
        })
});

app.post('/api/newbook', function (req, res) {
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