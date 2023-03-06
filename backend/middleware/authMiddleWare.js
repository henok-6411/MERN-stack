const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');
const asyncHandler = require('express-async-handler');


const protect = asyncHandler( async (req, res, next) => {
     let token;
     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) try {
     // get the token from the header ['Bearer','token_value']
          token = req.headers.authorization.split(' ')[1]
     // verify the token
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          // get the user from the token 
          req.user = await User.findById(decoded.id).select('-password');   
     } catch (error) {
          console.log(error);
          res.status(400);
          throw new Error('Not authorized user');
     }
     if (!token) {
          res.status(401);
          throw new Error('Not authorized user,No token');
     }
     next()
})
module.exports = protect;