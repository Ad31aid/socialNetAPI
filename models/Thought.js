const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
  // ... Reaction fields here
});

const ThoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reactions: [ReactionSchema]
});

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', ThoughtSchema);
module.exports = Thought;
