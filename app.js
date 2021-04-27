const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const index = require('./routes/index.routes');

const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Origin', req.headers.origin);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	);
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use('/', index);

module.exports = app;
