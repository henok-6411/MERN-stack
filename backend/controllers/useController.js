const asyncHandler = require('express-async-handler');
const User = require('../model/userSchema');
const protocol = require('../middleware/authMiddleWare');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//@description post new user-- signup user
//@route POST '/api/users'
//@access public
const registerUser = asyncHandler(async (req, res) => {
     const { fname, lname, email, password } = req.body;
     if (!fname || !lname || !email || !password) {
          res.status(400);
          throw new Error('complite the required fields');
     }
     const existedUser = await User.findOne({ email });
     if (existedUser) {
          res.status(400);
          throw new Error('The email address you provided did exista')
     }
     // hash the password
     const salt = await bcrypt.genSalt(10);
     const hashPassword = await bcrypt.hash(password, salt);
     // post or create the user
     const user = await User.create({
          fname,
          lname,
          email,
          password:hashPassword
     })
     if (user) {
          res.send({
          _id:user.id,
          fname: user.fname,
          lname: user.lname,
          email: user.lname,
          token:generatToken(user._id)
          })  
     }
   res.send(user)
})

//@description Authenticate a user
//@route POST '/api/users/login'
//@access public
const logInUser = asyncHandler(async (req, res) => {
     const { email, password } = req.body;

     const user = await User.findOne({ email });

     const deCodePassWord = await bcrypt.compare(password, user.password)
     
     if (user && deCodePassWord === true) {
          res.send({
               id: user.id,
               fname: user.fname,
               lname: user.lname,
               email: user.email,
               token:generatToken(user.id)
      })
          
     } else {
          res.status(400)
          throw new Error('Unauthorized user')
     }
})

//@description get new user
//@route GET '/api/users/login/me'
//@access public
const getUser = asyncHandler(async (req, res) => {
     const { id, email, lname, fname } = await User.findById(req.user.id);
     
     res.send({
          id: id,
          email,
          lname,
          fname
     })
})
const generatToken = (id ) => {
     return jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn:'30d'
     })
}
module.exports = {
     registerUser,
     logInUser,
     getUser
};