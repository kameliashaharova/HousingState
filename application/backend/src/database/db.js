require('dotenv').config();
const Sequelize = require('sequelize');

// credentials to log into database, these should live in a config file
// instead of being added to git
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_AUTH,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_LANG,
    operatorsAliases: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

db.authenticate()
  .then(() => console.log('Database conneted successfully'))
  .catch((error) => console.log('Error: ', error));

// sync all tables with database
// set to: sync({force: true}) to force drop and recreate of all tables on save (for dev testing)
db.sync();

export default db;
