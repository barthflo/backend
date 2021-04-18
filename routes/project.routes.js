const router = require('express').Router();
const db = require('../models/index');

router.get('/', (req, res) => {
    db.Project.findAll({
        order: [
            ['updatedAt', 'DESC']
        ],
        attributes: {
            exclude : ['createdAt', 'updatedAt']
        },
        include:[
            {
                model: db.Picture,
                attributes: ['id','name', 'alt' ]
            },
            { 
                model:db.Category,
                through : {attributes : []},
            },
            
        ]
    })
    .then(projects => res.status(200).json(projects))
    .catch(err => res.send(err));
})

module.exports = router