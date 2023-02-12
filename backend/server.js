require('dotenv').config();
const express = require('express');
const errorHandler = require('./middleware/errorMiddleware');
const connectDb = require('./config/db');
const PORT = process.env.PORT || 8000;
connectDb()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/goals', require('./routers/goalRouts'));
app.use('/api/users',require('./routers/userRouts'))
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`server is up and listening on port no ${PORT}`);
});
