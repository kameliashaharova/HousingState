import db from '../database/db';
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');

// defines schema for users table ('s' added by sequelize)
const User = db.define(
  'User',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },

    email: {
      type: Sequelize.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    first_name: {
      type: Sequelize.STRING(45),
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },

    last_name: {
      type: Sequelize.STRING(45),
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },

    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },

    type: {
      type: Sequelize.STRING(20),
      allowNull: false,
      comment: 'can be: admin, student, professor, other',
    },

    sfsu_verified: {
      type: Sequelize.VIRTUAL,
      get() {
        return `${this.email}`.includes('@mail.sfsu.edu') ? true : false;
      },
      comment: 'whether the user has an sfsu email address',
    },
  },
  {
    hooks: {
      // hashes password + salt(8) before storing password in db
      beforeCreate: async (user) => {
        try {
          user.password = await bcrypt.hash(user.password, 8);
        } catch (error) {
          console.log(error);
        }
      },
    },
  }
);

// returns true if password is valid
// using 'function' since 'this.' does't work with =>
User.prototype.validPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log(error);
  }
};

// returns true if user is admin
User.prototype.isAdmin = function () {
  return this.type == 'admin';
};

module.exports = User;
