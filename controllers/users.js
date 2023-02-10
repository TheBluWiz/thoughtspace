const { User } = require('../models')

module.exports = {
  async getUsers(data) {
    const users = await User.find()
    return { users }
  },
  getUser(data) {
    return { message: "Here is a single user" }
  },
  async createUser(data) {
    try {
      console.log('Creating New User');
      const newUser = await User.create(data)
      console.log(`\nNew User:\n${newUser}`)
      return newUser
    }
    catch (err) {
      console.log(err);
      return err;
    }

    return { newUser }
  },
  updateUser(data) {
    return { message: "Updated User"}
  },
  deleteUser(data) {
    return { message: "User Deleted"}
  },
  addFriend(data) {
    return { message: `${data.userId} has befriended ${data.friendId}`}
  },
  removeFriend(data) {
    return { message: `${data.userId} is no longer friends with ${data.friendId}`}
  }
};
