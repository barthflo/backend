const router = require('express').Router();
const about = require('../controlers/about.controler');

router.get('/', about.findOne);

module.exports = router;
