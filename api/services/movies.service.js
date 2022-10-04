const db = require('database/db');

async function getAllMovies() {
  return await db.Movies.findAll();
}

module.exports = {
  getAllMovies
}
