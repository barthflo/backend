const router = require('express').Router();
const resume = require('../controlers/resume.controler');
const { verifyJWT } = require('../services/verifyJWT');
const { upload } = require('../services/uploadServices.js');

router.get('/', resume.findAll);

router.get('/pdf', resume.findPdf);

router.get('/pdf-list', verifyJWT, resume.findAllPdf);

router.get('/:id', resume.findOne);

router.post('/', verifyJWT, resume.create);

router.post('/pdf', verifyJWT, upload.array('files'), resume.uploadPdf);

router.put('/pdf', verifyJWT, resume.updatePdfs);

router.put('/:id', verifyJWT, resume.update);

router.delete('/:id', verifyJWT, resume.delete);

module.exports = router;
