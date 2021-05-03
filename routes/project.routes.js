const router = require('express').Router();
const project = require('../controlers/project.controler');
const { verifyJWT } = require('../services/verifyJWT');
const { upload } = require('../services/uploadServices.js');

router.get('/', project.findAll);

router.get('/categories', project.findAllCategories);

router.get('/:id', verifyJWT, project.findOne);

router.post('/', verifyJWT, upload.array('files'), project.create);

router.post('/categories', verifyJWT, project.createCategory);

router.put('/:id', verifyJWT, upload.array('files'), project.update);

router.delete('/:id', verifyJWT, project.delete);

module.exports = router;
