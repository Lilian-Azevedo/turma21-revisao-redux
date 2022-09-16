const UserService = require('../services/UserService');

const getAll = async (_req, res) => {
  const users = await UserService.getAll();
  return res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserService.findById(id);
    if (user.error) throw new Error(user.error.message);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  const user = await UserService.addUser(req.body);
  if (user.error) return res.status(user.code).send(user.error);
  return res.status(201).json(user);
};

module.exports = {
  getAll,
  findById,
  addUser
};