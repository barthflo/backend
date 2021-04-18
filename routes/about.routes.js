const router = require('express').Router();
const db = require('../models/index');

router.get('/', (req, res) => {
    db.About.findAll({
        limit: 1,
        order : [["updatedAt", "DESC"]]
    }).then(abouts => res.status(200).json(abouts))
    .catch(err => res.send(err))
})

router.get('/profile-pic', (req, res) => {
    db.Picture.findAll({
        where : {
            tag : "about"
        },
        limit : 1,
        order : [['updatedAt', 'DESC']]
    }).then(picture => res.status(200).json(picture))
    .catch(err => res.send(err))
})
module.exports = router