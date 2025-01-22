import { User } from '../db/models/userModel.js';

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const response = await User.findAll();
    return response
  }

  async findOne(id) {
    try {
      const user = await User.findByPk(id, {
        attributes: ['id', 'email', 'createdAt'], // Specify which fields to return
        raw: true // Return plain object instead of Sequelize instance
      });

      if (!user) {
        throw new Error(`User with id ${id} not found`);
      }

      console.log('User found:', user); // Debug log
      return user;
    } catch (error) {
      throw error;
    }
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

export default UserService
