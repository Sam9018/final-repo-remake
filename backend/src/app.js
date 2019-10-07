'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

const nameRouter = require('./routes/name-route');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(nameRouter);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    })
  }
}