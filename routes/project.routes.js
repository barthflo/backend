const router = require('express').Router();
const project = require('../controlers/project.controler');
const { verifyJWT } = require('../services/verifyJWT');

router.get('/', project.findAll);

router.delete('/:id', verifyJWT, project.delete);

module.exports = router;
