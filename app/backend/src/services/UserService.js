const User = require('../models/UserModel');

const getAll = async () => User.getAll();


module.exports = {
    getAll,
};