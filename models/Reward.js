const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  user: { type: String, unique: true },
  title: { type: String },
  body: { type: String }
}, { timestamps: true });

const Reward = mongoose.model('Reward', rewardSchema);

module.exports = Reward;