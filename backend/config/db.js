const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDb = async () => {
     try {
          const conn = await mongoose.connect(process.env.MONGODB_URL);
          console.log(`MongoDB is connected : ${conn.connection.host}`)
     } catch (error) {
          console.log(error)
  }
}

module.exports = connectDb