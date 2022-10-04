const Joi = require('joi');
const validateRequest = require('middlewares/validateRequest')

function newMovieSchema(req, res, next) {
  const schema = Joi.object({
    background: Joi.string().required(),
    text_color: Joi.string().required(),
    username: Joi.string().required(),
    name: Joi.string().required(),
    address: Joi.string().empty(''),
    city: Joi.string().empty(''),
    country: Joi.string().required(),
    verified: Joi.number().integer().required(),
    user_uid: Joi.string().required(),
    is_free: Joi.number().integer().required(),
    links: Joi.array()
  });

  validateRequest(req, next, schema);
}

module.exports = {
  newMovieSchema
}