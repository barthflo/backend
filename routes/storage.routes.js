const router = require('express').Router();
const storage = require('../controlers/storage.controler');

router.get('/:file', storage.findOne);

module.exports = router;
