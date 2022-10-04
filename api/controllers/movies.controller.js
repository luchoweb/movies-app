const moviesService = require('services/movies.service');

function getAllMovies(req, res, next) {
  moviesService.getAllMovies()
    .then(movies => res.json(movies))
    .catch(next);
}

module.exports = {
  getAllMovies
}
