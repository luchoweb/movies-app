const moviesService = require('services/movies.service');

const getAllMovies = (req, res) => {
  const page = req.query?.page || 1;
  const limit = 10;

  moviesService.getAllMovies( page, limit )
    .then(movies => res.json(movies))
    .catch(err => res.json(err));
}

module.exports = {
  getAllMovies
}
