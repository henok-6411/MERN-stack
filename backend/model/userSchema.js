const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
     name: {
          type: String,
          require: [true, 'write users login info']
     },
     email: {
          type: String,
          require: [true, 'write users login info']
     },
     password: {
          type: String,
          require: [true, 'write users login info']
     }
}, {
     timestamps:true
})

module.exports = mongoose.model('Users', userSchema);