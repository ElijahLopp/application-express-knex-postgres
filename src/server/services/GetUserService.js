const { usersRepository } = require('../../database/entities/User.repository');
const { NotFoundError } = require('../helpers/ApiErrors');

class GetUserService {
  async execute({ userId }) {
    const user = await usersRepository.findOneBy({ id: userId });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    return user;
  }
}

module.exports = { GetUserService };
