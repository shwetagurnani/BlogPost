const router = require('express').Router();

const commentController = require('../controllers/comment');

router.post('/addComment', commentController.addComment);


module.exports = router;
