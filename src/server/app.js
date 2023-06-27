require('express-async-errors');
const express = require('express');

const { appRoutes } = require('./app.routes');
const { ErrorMiddleware } = require('./middlewares/ErrorMiddleware');

const app = express();

app.use(express.json());

app.use(appRoutes);

app.use(new ErrorMiddleware().handle);

module.exports = { app };
