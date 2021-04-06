const Listing = require('../models/listing');
const Message = require('../models/message');
const User = require('../models/user');

// Listing
Listing.belongsTo(User, { foreignKey: 'user_id' });

// Message
Message.belongsTo(User, { foreignKey: 'from_user' });
Message.belongsTo(User, { foreignKey: 'to_user' });

// User
User.hasMany(Listing, { foreignKey: 'user_id' });
User.hasMany(Message, { foreignKey: 'from_user' });
User.hasMany(Message, { foreignKey: 'to_user' });

module.exports = { Listing, Message, User };
