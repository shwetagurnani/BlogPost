const router = require('express').Router();

const postController = require('../controllers/post');

router.post('/createPost', postController.createPost);
router.get('/displayPosts', postController.displayPosts);
router.post('/displayPost', postController.displayPost);


module.exports = router;
