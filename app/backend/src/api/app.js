require('express-async-errors');
const Cors = require('cors');
const express = require('express');
const UserController = require('../controllers/UserController');
// const httpErrorMiddleware = require('../middlewares/httpErrorMiddleware');

const app = express();
app.use(Cors());

app.use(express.json());

// app.use('/', routes);

// app.use(httpErrorMiddleware);

app.get('/exit', (_req, res) => res.status(418).end());
app.get('/user', UserController.getAll);
app.post('/user');

module.exports = app;
