const router = require('express').Router();
const authControler = require('../controlers/auth.controler');

router.post('/login', authControler.login);

module.exports = router;
