const express = require('express');
const router = express.Router();
const postConrtoller = require('../controllers/postConrtoller');
const checkAuth = require("../middleware/check-aouth")


router.get('/', postConrtoller.findAll);

router.get('/:id', postConrtoller.findOne);

router.post('/', postConrtoller.create);

router.patch('/:id', postConrtoller.update);

router.delete('/:id', postConrtoller.delete);

// router.post('/:id', postConrtoller.createComment);

module.exports = router;