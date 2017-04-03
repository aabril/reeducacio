const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  user: { type: String },
  title: { type: String },
  text: { type: String }
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
