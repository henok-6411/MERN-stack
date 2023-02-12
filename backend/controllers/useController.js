const asyncHandler = require('express-async-handler');
const Users = require('../model/userSchema');

//@description post new user
//@route POST '/api/users'
//@access public
const registerUser =  (req, res) => {
      res.send({ message: 'User Post' })
}

//@description Authenticate a user
//@route POST '/api/users/login'
//@access public
const logInUser =  (req, res) => {
      res.send({ message: 'Login user' })
}

//@description get new user
//@route GET '/api/users'
//@access public
const getUser =  (req, res) => {
      res.send({ message: 'get user' })
}
module.exports = {
     registerUser,
     logInUser,
     getUser
};