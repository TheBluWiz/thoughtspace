const { Schema, model } = require('mongoose');
const Thought = require('./Thought')

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, match: '/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/' },
    thoughts: [Thought],
    friends: {
      type: [userSchema]
    }
  }
);

userSchema.virtual(friendCount)
  .get(function () {
    return this.friends.length
  });

const User = model('user', userSchema);

module.exports = User;