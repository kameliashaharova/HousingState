import express from 'express';
import {
  addMessage,
  getConversationsWith,
  getMessages,
} from '../controller/message';

const message = express.Router();

message.route('/').post(addMessage);
message.route('/:from_user').get(getConversationsWith);
message.route('/:from_user/:to_user').get(getMessages);

export default message;
