const { usersRepository } = require('../../database/entities/User.repository');

class GetAllUsersService {
  async execute(query) {
    const users = await usersRepository.find(query);

    return users;
  }
}

module.exports = { GetAllUsersService };
