const { Movie, Show } = require('./listMovies')

const moviesController = {};

moviesController.newMovie = async (req, res, next) => {
    try {
        const { name } = req.body;
        
        const result = await Movie.create({ 
            name: name
        });
        console.log('hello i am moviescontroller newmovie', result);
        return next();

    } catch (err) {
        return next(
            {
                log: 'Error in newMovie controller',
                status: 400,
                message: { err: 'An error occurred in newMovie middleware'}
            }
        );
    }
}


moviesController.getMovie = async (req, res, next) => {
    try {
        //gives me an array of obj of all the movies
        const list = await db.Movie.find({});
        res.locals.movie = list;
        return next();
    } catch (err) {
        return next(
            {
                log: 'Error in getMovie controller',
                status: 400,
                message: { err: 'An error occurred in getMovie middleware' }   
            }
        );
    }
}

moviesController.newShow = async (req, res, next) => {
    try {
        const { name } = req.body;

        const show = await Show.create({ name : name });

        return next();

    } catch (err) {
        return next(
            {
                log: 'Error in newShow controller',
                status: 400,
                message: { err: 'An error occurred in newShow middleware'}
            }
        );
    }
}

moviesController.getShow = async (req, res, next) => {
    try {
        const list = await db.Show.find({});
        res.locals.show = list;
        return next();
    } catch (err) {
        return next(
            {
                log: 'Error in getShow controller',
                status: 400,
                message: { err: 'An error occurred in getShow middleware' }   
            }
        );
    }
}

module.exports = moviesController;