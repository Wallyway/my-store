import { User } from '../db/models/userModel.js';
import boom from '@hapi/boom';

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await User.create(data);
    return newUser;
  }

  async find() {
    const response = await User.findAll();
    return response
  }

  async findOne(id) {
    try {
      const user = await User.findByPk(id)

      if (!user) {
        throw boom.notFound(`User with id ${id} not found`);
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async update(id, changes) {
    try {
      // Find the user
      const user = await this.findOne(id)
      const updatedUser = await user.update(changes);
      return updatedUser;

    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const user = await this.findOne(id);            // Find the user
      const deletedUser = await user.destroy()        // Update user with changes
      return deletedUser;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    };
  }
}

export default UserService
