import express from 'express';
import {
  getUsers,
  addUser,
  authenticateUser,
  validateUser,
  deleteUsers,
} from '../controller/user';

const user = express.Router();

user.route('/').get(getUsers).post(addUser);
user.route('/auth').post(authenticateUser);
user.route('/:id').get(validateUser).delete(deleteUsers);

export default user;
