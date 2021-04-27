const router = require('express').Router();
const contact = require('../controlers/contact.controler');

router.get('/', contact.findAll);

module.exports = router;
