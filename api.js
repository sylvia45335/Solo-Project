const express = require('express');
const moviesController = require('./moviesController.js');
const router = express.Router();

//routers go here
//to test DB, go to POSTMAN and use localhost 3000

//GET request print out everything in database for movie and list
router.get('/movie', moviesController.getMovie, (req, res) => {
    return res.status(200).json(res.locals.movie);
})

router.get('/show', moviesController.getShow, (req, res) => {
    return res.status(200).json(res.locals.show)
})

//POST request client sends server name of movie or show
//movie
router.post('/movie', moviesController.newMovie, (req, res) => {
    return res.status(200).json(res.locals.movie);
})

//show
router.post('/show', moviesController.newShow, (req, res) => {
    return res.status(200).json(res.locals.show);
})

//DELETE to delete if they don't want the show there anymore
//movie
router.delete('/movie', moviesController.deleteMovie, (req, res) => {
    return res.status(200).json(res.locals.result);
})

router.delete('/show', moviesController.deleteShow, (req, res) => {
    return res.status(200).json(res.locals.result);
})

//EXTENSION
//PUT request updates changes being made



module.exports = router;