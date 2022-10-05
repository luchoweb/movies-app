const { DataTypes } = require('sequelize');

const model = (sequelize) => {
  const attributes = {
    title: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    poster: { type: DataTypes.STRING, allowNull: false }
  };

  const options = {};

  return sequelize.define('Movies', attributes, options);
}

module.exports = model;
