const { DeleteUserService } = require('../services/DeleteUserService');

class DeleteUserController {
  async handle(request, response) {
    const { id } = request.params;

    const service = new DeleteUserService();

    await service.execute({ id: Number(id) });

    return response.json({ message: 'User deleted' });
  }
}

module.exports = { DeleteUserController };
