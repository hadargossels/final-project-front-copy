const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const checkAuth = require("../middleware/check-aouth")


router.get('/', orderController.findAll);

router.get('/:id', orderController.findOne);

router.post('/', orderController.create);

router.patch('/:id', orderController.update);

router.delete('/:id', orderController.delete);

module.exports = router;