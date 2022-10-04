const { Sequelize } = require('sequelize');
const { Pool } = require('pg');

module.exports = db = {};

initialize();

async function initialize() {
  const pool = new Pool();
  pool.connect((err) => {
    if ( err ) throw err;
  });

  const { PGUSER, PGPASSWORD, PGDATABASE } = process.env;

  // connect to db
  const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, { dialect: 'postgres' });

  // init models and add them to the exported db object
  db.Movies = require('models/movies.model')(sequelize);

  // sync all models with database
  await sequelize.sync({ alter: true });
}
