require('express-async-errors');
const bodyParser = require('body-parser');
const Cors = require('cors');
const express = require('express');
const UserController = require('../controllers/UserController');
// const httpErrorMiddleware = require('../middlewares/httpErrorMiddleware');

const app = express();
app.use(bodyParser.json());
app.use(Cors());

app.use(express.json());

// app.use(httpErrorMiddleware);

app.get('/exit', (_req, res) => res.status(418).end());

app.get('/user/:id', UserController.findById);
app.get('/user', UserController.getAll);
app.post('/user', UserController.addUser);

module.exports = app;
