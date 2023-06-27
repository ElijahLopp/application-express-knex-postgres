const { knex } = require('../connection');

class UserRepository {
  async save({ name, email, age, country, city }) {
    const user = await knex('users')
      .insert({
        name,
        email,
        age,
        country,
        city,
      })
      .returning('*');

    return user[0];
  }

  async find(query) {
    const users = await knex
      .select('*')
      .from('users')
      .where({ ...query });

    return users;
  }

  async findOneBy(query) {
    const user = await knex
      .select('*')
      .from('users')
      .where({ ...query })
      .first();

    return user;
  }

  async update({ id, name, email, age, country, city }) {
    const user = await knex('users')
      .where({ id })
      .update({ name, email, age, country, city })
      .returning('*');

    return user[0];
  }

  async delete({ id }) {
    await knex('users').where({ id }).del();
  }
}

const usersRepository = new UserRepository();

module.exports = { usersRepository };
