const db = require('../models');

exports.findOne = async (req, res) => {
	try {
		const about = await db.About.findAll({
			limit: 1,
			order: [['updatedAt', 'DESC']],
			attributes: ['id', 'description'],
			include: {
				model: db.Picture,
				as: 'picture',
				attributes: ['name', 'alt', 'id'],
			},
		});
		if (about === null) {
			res.status(404).json('No results');
		}
		res.json(about);
	} catch (err) {
		res.status(500).json(err.toString());
	}
};
