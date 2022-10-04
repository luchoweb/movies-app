const moviesService = require('services/movies.service');

function getAllMovies(req, res, next) {
  moviesService.getAllMovies()
    .then(movies => res.json(movies))
    .catch(next);
}

function saveMovie(req, res, next) {
  moviesService.saveMovie(req.body)
    .then(() => res.json({ code: 200, message: 'Movie saved' }))
    .catch(next);
}

module.exports = {
  getAllMovies,
  saveMovie
}
