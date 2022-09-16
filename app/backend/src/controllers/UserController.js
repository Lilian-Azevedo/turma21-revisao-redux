const UserService = require('../services/UserService');

const getAll = async (_req, res) => {
  const users = await UserService.getAll();
  return res.status(200).json(users);
};

const addUser = async (req, res) => {
  const user = await UserService.addUser(req.body);
  if (user.error) return res.status(user.code).send(user.error);
  return res.status(201).json(user);
};

module.exports = {
  getAll,
  addUser
};