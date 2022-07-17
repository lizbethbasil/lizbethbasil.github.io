const mongoose = require('mongoose');
const uri = "mongodb+srv://lizbeth:45114511@firstcluster.uaeri.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.connect('mongodb://localhost:27017/Library');
//const client = new MongoClient(uri);

const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

const UserSchema = new Schema({
    uid : String,
    pwd: String
});

const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;