// const User = require('../models/User');

module.exports = {
  getUsers(data) {
    return { message: "Here is the user data" }
  },
  getUser(data) {
    return { message: "Here is a single user" }
  },
  createUser(data) {
    return { 
      status: "User Created",
      newUser: {
        username: data.username,
        email: data.email,
      }
    }
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
