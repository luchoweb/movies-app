const db = require('helpers/db');

async function getAllMovies() {
  return await db.Movies.findAll();
}

async function saveMovie(params) {
	const name = params.name;

	// validate
  const duplicateMovie = await db.Movies.findOne({ where: { name } });
	if ( duplicateMovie )
    throw 'There is a movie with the same name.';

	const movie = new db.Movies(params);
	await movie.save();
}

module.exports = {
  getAllMovies,
  saveMovie
}
