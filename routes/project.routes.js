const router = require('express').Router();
const project = require('../controlers/project.controler');
const { verifyJWT } = require('../services/verifyJWT');

router.get('/', project.findAll);

router.get('/categories', project.findAllCategories);

router.post('/', verifyJWT, project.create);

router.post('/categories', verifyJWT, project.createCategory);

router.put('/:id', verifyJWT, project.update);

router.delete('/:id', verifyJWT, project.delete);

module.exports = router;
