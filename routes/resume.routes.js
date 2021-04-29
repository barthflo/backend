const router = require('express').Router();
const resume = require('../controlers/resume.controler');

router.get('/', resume.findAll);

router.get('/pdf', resume.findPdf);

module.exports = router;
