const router = require('express').Router();
const resume = require('../controlers/resume.controler');

router.get('/', resume.findAll);

module.exports = router;
