const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://lizbeth:45114511@firstcluster.uaeri.mongodb.net/?retryWrites=true&w=majority");
const Schema = mongoose.Schema;

var BookSchema = new Schema({
    bookCode: Number,
    bookName: String,
    authorName: String,
    description: String,
    rating: Number,
    imageURL: String
});

var Bookdata = mongoose.model('books', BookSchema);
module.exports = Bookdata;