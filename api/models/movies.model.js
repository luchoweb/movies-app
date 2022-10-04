const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
    name: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    poster: { type: DataTypes.STRING, allowNull: false }
  };

  const options = {};

  return sequelize.define('Movies', attributes, options);
}
