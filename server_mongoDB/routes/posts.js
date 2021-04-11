const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const checkAuth = require("../middleware/check-aouth")


router.get('/', postController.findAll);

router.post('/', postController.create);

router.get('/:postId', postController.findOne);

router.patch('/:postId', postController.update);

router.delete('/:postId', postController.delete);


// router.get('/:postId/:commentId', postController.findOne);

router.post('/:postId', postController.createComment);

router.patch('/:postId/:commentId', postController.updateComment);



module.exports = router;