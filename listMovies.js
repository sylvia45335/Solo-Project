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

const movieSchema = new Schema({
    name: {type: String, required: true}
});
const showSchema = new Schema({
    name: {type: String, required: true}
});


const Movie = mongoose.model('Movie', movieSchema);
const Show = mongoose.model('Show', showSchema);

module.exports = {
    Movie,
    Show
};

