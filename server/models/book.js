const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = new mongoose.model('Book', bookSchema);