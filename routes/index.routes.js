const router = require('express').Router();
const projects = require('./project.routes');
const about = require('./about.routes');
const storage = require('./storage.routes');
const contact = require('./contact.routes');
const auth = require('./auth.routes');
const resume = require('./resume.routes');

router
	.get('/', (req, res) => {
		res.send('<h1>Portfolio Flo Barth Backend</h1>');
	})
	.use('/projects', projects)
	.use('/about', about)
	.use('/contact', contact)
	.use('/storage', storage)
	.use('/auth', auth)
	.use('/resume', resume);

module.exports = router;
