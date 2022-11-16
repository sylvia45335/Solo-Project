const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://sylvia45335:598northsv@cluster0.tvqek9k.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'MoviesAndLists'
})
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {type: String, required: true}
});


const Movie = mongoose.model('movie', listSchema);
const Show = mongoose.model('show', listSchema);

module.exports = {
    Movie,
    Show
};