const moviesService = require('services/movies.service');

const getAllMovies = (req, res) => {
  const page = req.query?.page || 1;
  const limit = 10;

  moviesService.getAllMovies( page, limit )
    .then(movies => res.json(movies))
    .catch(err => {
      res.status(500).json({
        errorCode: 500,
        errorMessage: 'An error occurred connecting to the database',
        errorSequelize: err
      });
    });
}

module.exports = {
  getAllMovies
}
