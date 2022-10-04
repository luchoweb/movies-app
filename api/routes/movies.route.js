const express = require('express');
const router = express.Router();
const moviesController = require('controllers/movies.controller');
const { newMovieSchema } = require('schemas/movies.schema');

router.get('/movies', moviesController.getAllMovies);
router.post('/movies', newMovieSchema, moviesController.saveMovie);

module.exports = router;
