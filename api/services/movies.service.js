const db = require('helpers/db');

module.exports = {
  getAllMovies
}

async function getAllMovies() {
  return await db.Movies.findAll();
}
