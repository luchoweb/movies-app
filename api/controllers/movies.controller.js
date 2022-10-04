const moviesService = require('services/movies.service');

function getAllMovies(req, res) {
  moviesService.getAllMovies()
    .then(movies => res.json(movies))
    .catch(err => res.json(err));
}

module.exports = {
  getAllMovies
}
