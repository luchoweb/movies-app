const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
    Title: { type: DataTypes.STRING, allowNull: false },
    Year: { type: DataTypes.STRING, allowNull: false },
    Type: { type: DataTypes.STRING, allowNull: false },
    Poster: { type: DataTypes.STRING, allowNull: false }
  };

  const options = {};

  return sequelize.define('Movies', attributes, options);
}
