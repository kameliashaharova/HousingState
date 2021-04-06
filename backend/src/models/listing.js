import db from '../database/db';
const Sequelize = require('sequelize');

// defines schema for listings table ('s' added by sequelize)
const Listing = db.define('Listing', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
    comment: 'foreign key, from `users` table',
  },

  building_num: {
    type: Sequelize.CHAR(4),
    allowNull: false,
    validate: {
      isNumeric: true,
    },
    comment: 'up to 4 digit number identifying a building on a street',
  },

  street: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },

  city: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },

  state: {
    type: Sequelize.CHAR(2),
    allowNull: false,
  },

  zip_code: {
    type: Sequelize.CHAR(5),
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },

  apt_suite: {
    type: Sequelize.STRING(45),
    allowNull: true,
    comment:
      'optional parameter specifiying appartment number within a building',
  },

  cost: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },

  unit_type: {
    type: Sequelize.STRING(45),
    allowNull: false,
    comment: 'can be one of: house, appartment, townhouse',
  },

  lease_length: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      isNumeric: true,
    },
    comment: 'length of lease in months, if applicable',
  },

  offer_type: {
    type: Sequelize.STRING(45),
    allowNull: false,
    comment: 'rent or buy',
  },

  bedrooms: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },

  bathrooms: {
    type: Sequelize.FLOAT(2, 1),
    allowNull: true,
    comment: 'whole number or x.5 for half bathrooms (i.e. 2.5 bath)',
  },

  furnished: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    comment: 'true if furnished, false if not',
  },

  sq_footage: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },

  available_at: {
    type: Sequelize.DATEONLY,
    allowNull: true,
    comment: 'date the renter is allowed to move in',
    validate: {
      isDate: true,
    },
  },

  description: {
    type: Sequelize.STRING(1000),
    allowNull: true,
    comment:
      'any additional information the poster wants to provide via free form text',
  },

  full_address: {
    type: Sequelize.STRING(100),
    set() {
      this.setDataValue(
        'full_address',
        `${this.building_num}` +
          ' ' +
          `${this.street}` +
          ', ' +
          `${this.city}` +
          ', ' +
          `${this.state}` +
          ' ' +
          `${this.zip_code}`
      );
    },
    comment: 'building_num + street + city + state + zip_code',
  },

  approved: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    comment: 'whether listing has been approved by admin',
  },

  img_path: {
    type: Sequelize.STRING(100),
    allowNull: false,
    comment: 'path to image in files system corresponding to posting',
  },
});

module.exports = Listing;
