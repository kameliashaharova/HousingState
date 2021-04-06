const { Message, User } = require('../models/associations');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// route: GET /api/message/:from_user
exports.getConversationsWith = async (req, res, next) => {
  try {
    const conversations = await Message.findAll({
      group: ['to_user', 'from_user'],
      attributes: [
        'to_user',
        'from_user',
        [
          Sequelize.fn('max', Sequelize.col('Message.createdAt')),
          'last_message_at',
        ],
      ],
      where: {
        [Op.or]: [
          { from_user: req.params.from_user },
          { to_user: req.params.from_user },
        ],
      },
      include: [{ model: User, attributes: ['first_name', 'last_name'] }],
      order: [[Sequelize.col('last_message_at'), 'DESC']],
    });
    res.send(conversations);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: GET /api/message/:from_user/:to_user
exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Message.findAll({
      where: {
        [Op.or]: [
          { from_user: req.params.from_user, to_user: req.params.to_user },
          { from_user: req.params.to_user, to_user: req.params.from_user },
        ],
      },
      include: [{ model: User, attributes: ['first_name', 'last_name'] }],
      order: [['createdAt', 'ASC']],
    });
    res.send(messages);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: POST /api/message
exports.addMessage = async (req, res, next) => {
  // unpacks key, values of req.body to provide
  // {column: value} association
  try {
    console.log(req.body);
    await Message.create(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
