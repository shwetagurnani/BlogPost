const Post = require('../models/post');
const Comment = require('../models/comment');

exports.createPost = (req, res) => {
  Post.create(req.body)
    .then(post => {
      res.json({ success: true })
    })
    .catch(err => {
      res.json({ success: false })
    })
}

exports.displayPosts = (req, res) => {
  Post.find({})
  .sort('-createdAt')
    .then(posts => {
      res.json({ success: true, posts })
    })
    .catch(err => {
      res.json({ success: false })
    })
}


exports.displayPost = (req, res) => {
  Post.findById(req.body.postID)
    .then(post => {
      Comment.find({postId:req.body.postID})
    .then(comment => {
      res.json({ success: true, comment,post })
    })
     .catch(err => {
      res.json({ success: false })
    })
  })
};




