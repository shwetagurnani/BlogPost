const User = require('../models/user');
const Comment = require('../models/comment');


exports.addComment = (req, res) => {
  User.findById(req.body.userId)
  .then(user => {
   
    Comment.create({
      author: user.name,
      postId:req.body.postId,
      text:req.body.text
    })
    .then(comment => {
      res.json({ success: true })
    })
    .catch(err => {
      res.json({ success: false })
    })
  })

  };

