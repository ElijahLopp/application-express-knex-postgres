const { Router } = require('express');

const { CreateUserController } = require('./controllers/CreateUserController');
const {
  GetAllUsersController,
} = require('./controllers/GetAllUsersController');
const { GetUserController } = require('./controllers/GetUserController');
const { DeleteUserController } = require('./controllers/DeleteUserController');
const { UpdateUserController } = require('./controllers/UpdateUserController');

const appRoutes = Router();

appRoutes.post('/users', new CreateUserController().handle);
appRoutes.get('/users', new GetAllUsersController().handle);
appRoutes.get('/users/:id', new GetUserController().handle);
appRoutes.delete('/users/:id', new DeleteUserController().handle);
appRoutes.put('/users/:id', new UpdateUserController().handle);

module.exports = { appRoutes };
