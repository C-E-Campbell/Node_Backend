require('dotenv').config({ path: '../.env' });
const { PORT, MongoURI } = process.env;
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Db is connected!');
    console.log('Code away my friend!');
  });

app.listen(PORT, () => {
  console.log(`Open on port ${PORT}`);
});
