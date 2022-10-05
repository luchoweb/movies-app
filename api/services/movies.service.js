const db = require('models');

const getAllMovies = async ( page, limit ) => await db.Movies.findAll({
  limit,
  offset: page > 1 ? (page - 1) * limit : 0,
});

module.exports = {
  getAllMovies
}
