const express = require('express')
const fetchUser = require('../middleware/fetchUser')
const { createDetail, getDetail } = require('../controllers/detail')
const router = express.Router()

router.post('/create', fetchUser, createDetail)
router.get('/', fetchUser, getDetail);

module.exports = router