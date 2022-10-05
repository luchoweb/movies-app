'use strict';

const up = (queryInterface, Sequelize) => {
  return queryInterface.createTable('Movies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    year: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    type: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    poster: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    'deletedAt': {
      type: Sequelize.DATE,
      allowNull: true,
    }
  });
}

const down = (queryInterface, Sequelize) => {
  return queryInterface.dropTable('Movies');
}

module.exports = {
  up,
  down
}