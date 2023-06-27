const { usersRepository } = require('../../database/entities/User.repository');
const { NotFoundError } = require('../helpers/ApiErrors');

class UpdateUserService {
  async execute({ id, age, city, country, email, name }) {
    const user = await usersRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    const updatedUser = await usersRepository.update({
      id,
      age,
      city,
      country,
      email,
      name,
    });

    return updatedUser;
  }
}

module.exports = { UpdateUserService };
