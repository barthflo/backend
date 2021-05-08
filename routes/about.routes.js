const router = require('express').Router();
const about = require('../controlers/about.controler');
const { upload } = require('../services/uploadServices');
const { verifyJWT } = require('../services/verifyJWT');

router.get('/', about.findOne);

router.put('/:id', verifyJWT, upload.array('files'), about.update);

module.exports = router;
