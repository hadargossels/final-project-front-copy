const express = require('express');
const router = express.Router();
const usersController = require('../controllers/UsersController');
const jwt = require('jsonwebtoken')


router.post('/signup', usersController.signup);

router.post('/login', usersController.login);

router.get('/', usersController.findAll);

router.get('/:id', usersController.findOne);



// router.delete('/:id', employeesController.delete);

module.exports = router;