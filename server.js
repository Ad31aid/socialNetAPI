const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(express.json());
app.use('/api', apiRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/socialmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
