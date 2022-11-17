const {Show, Movie} = require('./listMovies.js');

const moviesController = {};

moviesController.newMovie = async (req, res, next) => {
    try {
        console.log(req.body);
        const { name } = req.body;

        const result = await Movie.create({
            name: name
        });
        res.locals.movie = result;
        return next();

    } catch (err) {
        return next(
            {
                log: 'Error in newMovie controller',
                status: 400,
                message: { err: 'An error occurred in newMovie controller.'}
            }
        )
    }
}


moviesController.getMovie = async (req, res, next) => {
    try {
        //gives me an array of obj of all the movies
        const list = await Movie.find({});
        console.log('hello im inside get movies', list)

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

moviesController.deleteMovie = async (req, res, next) => {
    try {
        const { name } = req.body;

        const result = await Movie.findOneAndDelete({ name: name });

        res.locals.result = result;
        return next();
    } catch(err) {
        return next(
            {
                log: 'Error in deleteMovie controller',
                status: 400,
                message: { err: 'An error occurred in deleteMovie middleware'}
            }
        );
    }
}

moviesController.newShow = async (req, res, next) => {
    try {
        const { name } = req.body;

        const show = await Show.create({ name : name });

        res.locals.show = show;

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
        const list = await Show.find({});
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

moviesController.deleteShow = async (req, res, next) => {
    try {
        const { name } = req.body;

        const result = await Show.findOneAndDelete({ name: name });

        res.locals.result = result;
        return next();
    } catch(err) {
        return next(
            {
                log: 'Error in deleteShow controller',
                status: 400,
                message: { err: 'An error occurred in deleteShow middleware'}
            }
        );
    }
}

module.exports = moviesController;