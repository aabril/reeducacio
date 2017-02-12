const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  user: { type: String, unique: true },
  title: { type: String },
  body: { type: String }
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
