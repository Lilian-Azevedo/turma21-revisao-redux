const User = require('../models/UserModel');

const getAll = async () => User.getAll();

const findById = async (id) => {
    const user = await User.findById(id);
    if (!user || user === undefined) {
      return {
        error: {
          message: 'user not found',
        },
      };
    } 
    return user;
};

const addUser = async (infoUser) => {
    const { name, heigth, weigth } = infoUser;
    const users = await User.getAll();
    const findUser = users.find((user) => user.name === name);

    if (findUser) {
      return {
        code: 409,
        error: {
          message: 'User already exists',
        },
      };
    }
    return User.addUser(infoUser);
  };

module.exports = {
    getAll,
    findById,
    addUser
};