const { CreateUserService } = require('../services/CreateUserService');

class CreateUserController {
  async handle(request, response) {
    const { age, city, country, email, name } = request.body;

    const service = new CreateUserService();

    const result = await service.execute({ age, city, country, email, name });

    return response.status(201).json(result);
  }
}

module.exports = { CreateUserController };
