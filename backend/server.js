require('dotenv').config();
const router = require('./routers/goalRouts');
const express = require('express');
const errorHandler = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', router);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`server is up and listening on port no ${PORT}`);
});
