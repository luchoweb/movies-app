require('dotenv').config();
const { PGUSER, PGDATABASE, PGPASSWORD } = process.env;

module.exports = {
  "development": {
    "username": PGUSER,
    "password": PGPASSWORD,
    "database": PGDATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": PGUSER,
    "password": PGPASSWORD,
    "database": PGDATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": PGUSER,
    "password": PGPASSWORD,
    "database": PGDATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
