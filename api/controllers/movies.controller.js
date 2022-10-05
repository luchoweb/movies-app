const moviesService = require('services/movies.service');
const databaseError = {
  errorCode: 500,
  errorMessage: 'An error occurred connecting to the database'
};

const getAllMovies = (req, res) => {
  const query = req.query?.query || '';
  const page = req.query?.page || 1;
  const limit = req.query?.limit || 10;

  moviesService.getAllMovies({ query, page, limit })
    .then(movies => res.json(movies))
    .catch(err => {
      res.status(500).json(databaseError);
    });
}

module.exports = {
  getAllMovies
}
