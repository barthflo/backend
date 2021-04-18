const express = require('express');
var cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const index = require('./routes/index.routes');

app.use(cors());
app.use('/', index);

module.exports = app;
