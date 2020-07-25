require('dotenv').config({ path: '../.env' });
const { PORT } = process.env;
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const scorpionRouter = require('./routes/scorpionsRouter');
const data = require('./data');
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/v1/scorpions', scorpionRouter);

app.listen(8293, () => {
  console.log(`Open on port 8293`);
});
