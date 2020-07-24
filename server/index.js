require('dotenv').config({ path: '../.env' });
const { PORT } = process.env;
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const data = require('./data');
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.get('/scorpions', (req, res, next) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Open on port ${PORT}`);
});
