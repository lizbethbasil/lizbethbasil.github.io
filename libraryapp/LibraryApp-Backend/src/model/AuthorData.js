const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://lizbeth:45114511@firstcluster.uaeri.mongodb.net/?retryWrites=true&w=majority");
const Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    authorName: String,
    bestseller: String,
    rating: Number,
    imageURL: String
});

var Authordata = mongoose.model('authors', AuthorSchema);
module.exports = Authordata;