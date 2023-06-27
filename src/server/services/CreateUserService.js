const { usersRepository } = require('../../database/entities/User.repository');

class CreateUserService {
  async execute({ age, city, country, email, name }) {
    const user = await usersRepository.save({
      age,
      city,
      country,
      email,
      name,
    });

    return user;
  }
}

module.exports = { CreateUserService };
