const mongoose = require('mongoose');
const uri = "mongodb+srv://AneeshV:Aneesh*1234@cluster0.hdx3u.mongodb.net/Library?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.connect('mongodb://localhost:27017/Library');
//const uri = "mongodb+srv://AneeshV:Aneesh*1234@cluster0.hdx3u.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
//const client = new MongoClient(uri);

const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

const UserSchema = new Schema({
    uid : String,
    pwd: String
});

const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;