const { GetUserService } = require('../services/GetUserService');

class GetUserController {
  async handle(request, response) {
    const { id } = request.params;

    const service = new GetUserService();

    const result = await service.execute({ userId: Number(id) });

    return response.json(result);
  }
}

module.exports = { GetUserController };
