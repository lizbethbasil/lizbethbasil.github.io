const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
const uri = "mongodb+srv://AneeshV:Aneesh*1234@cluster0.hdx3u.mongodb.net/Library?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;