import db from '../database/db';
const Sequelize = require('sequelize');

// defines schema for messages table ('s' added by sequelize)
const Message = db.define('Message', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  from_user: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
      comment: 'foreign key, from `users` table, sender of the message',
    },
  },

  to_user: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
      comment: 'foreign key, from `users` table, recipient of the message',
    },
  },

  text: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
});

module.exports = Message;
