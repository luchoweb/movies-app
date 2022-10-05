const db = require('models');

const getAllMovies = async ({ query, page, limit }) => {
  const options = {
    limit,
    offset: page > 1 ? (page - 1) * limit : 0,
  }

  if ( query !== '' ) {
    options.where = {
      title: {
        [Op.like]: `%${query}%`
      }
    }
  }

  return await db.Movies.findAll(options);
} 

module.exports = {
  getAllMovies
}
