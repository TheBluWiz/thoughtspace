// const User = require('../models/User');

module.exports = {
  getThoughts(data) {
    return { message: "Here are the thoughts" }
  },
  getThought(data) {
    return { message: "Here is a single thought"}
  },
  postThought(data) {
    return { 
      status: "User Created",
      newThought: {
        username: data.username,
        thought: data.thought,
      }
    }
  },
  updateThought(data) {
    return { 
      status: "User Created",
      newThought: {
        username: data.username,
        thought: data.thought,
      }
    }
  },
  deleteThought(data) {
    return { message: "Thought Deleted"}
  },
  addReaction(data) {
    return { message: `Reaction added to thought: ${data}`}
  },
  deleteReaction(data) {
    return { message: `Reaction deleted from thought: ${data}`}
  },
};