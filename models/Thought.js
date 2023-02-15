const { Schema, model } = require('mongoose');
const Reactions = require('./Reactions')

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [Reactions]
  }
)

thoughtSchema.virtual('reactionCount')
  .get(function () {
    return this.reactions.length
  });

const Thought = model('thought', thoughtSchema)

module.exports = Thought;