const { GetAllUsersService } = require('../services/GetAllUsersService');

class GetAllUsersController {
  async handle(request, response) {
    const { query } = request;

    const sevice = new GetAllUsersService();

    const result = await sevice.execute(query);

    return response.json(result);
  }
}

module.exports = { GetAllUsersController };
