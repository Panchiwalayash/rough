const express = require('express');
const { registerUser, loginUser, getUsers } = require('../controllers/user');
const router = express.Router();

router.post('/create', registerUser)
router.post('/login', loginUser)
router.get('/', getUsers)

module.exports = router