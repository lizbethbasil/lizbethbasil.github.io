const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
const uri = "mongodb+srv://lizbeth:45114511@firstcluster.uaeri.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;