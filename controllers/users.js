const { User, Thought } = require('../models');
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
      const updatedUser = await User.findByIdAndUpdate({_id: data._id}, data, { new: true })
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
      await Thought.deleteMany(
        {username: result.username}
      );
      return result
    }
    catch (err) {
      console.log(err);
      return err;
    }
  },
  async addFriend(data) {
    try {
      const user = await User.findById({ _id: data.userId })
      user.friends.push({ _id: data.friendId})
      updatedUser = await user.save()
      return updatedUser;
    }
    catch (err) {
      console.log(err)
      return err
    }
  },
  // This isn't working
  async removeFriend(data) {
   try {
    console.log(`\n\nRemoving Friend..\n`)
    const updatedUser = await User.findOneAndUpdate(
      { _id: data.userId },
      { $pull: { friends: { user: data.friendId}}},
      { new: true }
    )
    console.log(`\n\nUpdated User\n${updatedUser}`)
    return updatedUser;
   }
   catch (err) {
    console.log(err)
    return err;
   }
  }
};
