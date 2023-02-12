const express = require('express');
const router = express.Router();
const { registerUser,logInUser,getUser } = require('../controllers/useController');

router.post('/', registerUser)
router.post('/login', logInUser) 
router.get('/', getUser)
module.exports = router;