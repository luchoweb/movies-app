const db = require('helpers/db');

async function getAllMovies() {
  return await db.Movies.findAll();
}

module.exports = {
  getAllMovies
}
