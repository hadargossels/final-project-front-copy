const express = require('express');
const router = express.Router();
const categoryConroller = require('../controllers/categoryConroller');


router.get('/', categoryConroller.findAll);

router.get('/:id', categoryConroller.findOne);

router.post('/', categoryConroller.create);

// router.patch('/:id', categoryConroller.update);

router.delete('/:id', categoryConroller.delete);

module.exports = router;