const { Thought } = require('../models')

module.exports = {
  async getThoughts(data) {
    try{
      return await Thought.find()
    }
    catch (err) {
      console.log(err)
    }
  },
  async getThought(data) {
    try {
      return await Thought.findOne({ _id: data})
    }
    catch (err) {
      console.log(err)
    }
  },
  async postThought(data) {
    try {
      const newThought = await Thought.create(data)
      return newThought
    }
    catch (err) {
      console.log(err)
    }
  },
  async updateThought(data) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate({_id: data._id}, data, { new: true })
      return updatedThought
    }
    catch (err) {
      console.log(err)
    }
  },
  // How?
  async deleteThought(data) {
    try {
      result = await Thought.findByIdAndDelete({_id: data})
      return result
    }
    catch (err) {
      console.log(err);
      return err;
    }
  },
  async addReaction(data) {
    const thoughtData = {
      reactionBody: data.reactionBody,
      username: data.username
    }
    const thought = Thought.findOneAndUpdate(
      { _id: data.thoughtId},
      {$addToSet: {reactions: thoughtData}},
      {runValidators: true, new: true}
    )
    return thought
  },
  async removeReaction(data) {
    const thought = await Thought.findOneAndUpdate(
      { _id: data.thoughtId },
      { $pull: {reactions: data.reactionId}},
      {runValidators: true, new: true}
    )
    return thought
  },
};