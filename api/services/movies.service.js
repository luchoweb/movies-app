const { Op } = require('sequelize');
const db = require('models');

const getAllMovies = async ({ query, page, limit }) => {
  const q = decodeURI(query);

  return await db.Movies.findAll({
    limit,
    offset: page > 1 ? (page - 1) * limit : 0,
    where: {
      title: {
        [Op.iLike]: `%${q}%`
      }
    }
  });
} 

module.exports = {
  getAllMovies
}
