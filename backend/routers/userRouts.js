const express = require('express');
const router = express.Router();
const { registerUser, logInUser, getUser } = require('../controllers/useController');
const protect = require('../middleware/authMiddleWare');

router.post('/', registerUser)
router.post('/login', logInUser) 
router.get('/login/me',protect, getUser)
module.exports = router;