const router = require('express').Router();
const project = require('../controlers/project.controler');

router.get('/', project.findAll);

module.exports = router;
