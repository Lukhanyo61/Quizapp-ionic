const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/quizapp', { useNewUrlParser: true, useUnifiedTopology: true });

const userRouter = require('./routes/user');
app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
