const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  postId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('comment', commentSchema);