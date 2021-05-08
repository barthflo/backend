const router = require('express').Router();
const contact = require('../controlers/contact.controler');
const { verifyJWT } = require('../services/verifyJWT');
const { upload } = require('../services/uploadServices');

router.get('/', contact.findAll);

router.put('/', verifyJWT, upload.array('files'), contact.update);

module.exports = router;
