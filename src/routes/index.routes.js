const router = require('express').Router();
const adminRouter = require('./admin.routes.js');
const projectsRouter = require('./projects.routes.js');
const categoriesRouter = require('./categories.routes.js');
const picturesRouter = require('./pictures.routes.js');
const aboutRouter = require('./about.routes.js');
const socialMediaRouter = require('./social_media.routes.js');

router.use('/admins', adminRouter);
router.use('/projects', projectsRouter);
router.use('/categories', categoriesRouter);
router.use('/pictures', picturesRouter);
router.use('/about', aboutRouter);
router.use('/social-media', socialMediaRouter);

module.exports = router;