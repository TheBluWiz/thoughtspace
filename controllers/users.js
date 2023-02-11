const { User } = require('../models');
const { findOneAndDelete } = require('../models/Thought');

module.exports = {
  async getUsers(data) {
    const users = await User.find()
    return users
  },
  async getUser(data) {
    try {
      const user = await User.findOne({ _id: data})
      if (!user) return { message: "No user found"};
      return user;
    }
    catch (err) {
      console.log(err);
      return err;
    } 
  },
  async createUser(data) {
    try {
      const newUser = await User.create(data)
      return newUser
    }
    catch (err) {
      console.log(err);
      return err;
    }
  },
  async updateUser(data) {
    try {
      updatedUser = await User.findByIdAndUpdate({_id: data._id}, data, { new: true })
      return updatedUser
    }
    catch (err) {
      console.log(err)
      return err;
    }
  },
  async deleteUser(data) {
    try {
      result = await User.findByIdAndDelete({ _id: data })
      return result
    }
    catch (err) {
      console.log(err);
      return err;
    }
  },
  addFriend(data) {
    return { message: `${data.userId} has befriended ${data.friendId}`}
  },
  removeFriend(data) {
    return { message: `${data.userId} is no longer friends with ${data.friendId}`}
  }
};
