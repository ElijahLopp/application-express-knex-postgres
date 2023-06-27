const { usersRepository } = require('../../database/entities/User.repository');
const { NotFoundError } = require('../helpers/ApiErrors');

class DeleteUserService {
  async execute({ id }) {
    const user = await usersRepository.findOneBy({ id });

    console.log(user);

    if (!user) {
      throw new NotFoundError('User not found');
    }

    await usersRepository.delete({ id });
  }
}

module.exports = { DeleteUserService };
