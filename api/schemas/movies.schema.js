const Joi = require('joi');
const validateRequest = require('middlewares/validateRequest')

function movieSchema(req, res, next) {
  const schema = Joi.object({
    Title: Joi.string().required(),
    Year: Joi.string().required(),
    Type: Joi.string().required(),
    Poster: Joi.string().required()
  });

  validateRequest(req, next, schema);
}

module.exports = {
  movieSchema
}