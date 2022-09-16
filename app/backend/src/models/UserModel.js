const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM imc.users;');
  return users;
};

const findById = async (id) => {
  const query = 'SELECT * FROM imc.users WHERE id=?;';
  const [[user]] = await connection.execute(query, [id]);

  return user;
};

const addUser = async (name, heigth, weigth) => {
  const [user] = await connection.execute(
    'INSERT INTO imc.users (name, heigth, weigth) VALUES (?,?)',
  [name, heigth, weigth],
  );
  return ({ id: user.insertId, name, heigth, weigth });
};

module.exports = {
  getAll,
  findById,
  addUser
};