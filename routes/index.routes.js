const router = require('express').Router();
const projects = require('./project.routes');
const about = require('./about.routes');
const storage = require('./storage.routes');

router
	.get('/', (req, res) => {
		res.send('<h1>Portfolio Flo Barth Backend</h1>');
	})
	.use('/projects', projects)
	.use('/about', about)
	.use('/storage', storage);

module.exports = router;
