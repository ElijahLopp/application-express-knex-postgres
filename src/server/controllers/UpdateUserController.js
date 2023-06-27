const { UpdateUserService } = require('../services/UpdateUserService');

class UpdateUserController {
  async handle(request, response) {
    const { id } = request.params;
    const { age, city, country, email, name } = request.body;

    const service = new UpdateUserService();

    const result = await service.execute({
      id: Number(id),
      age,
      city,
      country,
      email,
      name,
    });

    return response.json(result);
  }
}

module.exports = { UpdateUserController };
