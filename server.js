const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/api/users');
const profileRouter = require('./routes/api/profile');
const postsRouter = require('./routes/api/posts');

const app = express();

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log('error', err));

app.get('/', (req, res) => res.send('cc'));

app.use('/api/users', userRouter);
app.use('/api/profile', profileRouter);
app.use('/api/posts', postsRouter);

const PORT = 5002 || process.env.PORT;

app.listen(PORT, () => console.log(`server is running at ${PORT}`));
