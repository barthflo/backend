const db = require('../models');

exports.findAll = async (req, res) => {
	try {
		const projects = await db.Project.findAll({
			order: [['updatedAt', 'DESC']],
			attributes: {
				exclude: ['createdAt', 'updatedAt'],
			},
			include: [
				{
					model: db.Picture,
					attributes: ['id', 'name', 'alt'],
				},
				{
					model: db.Category,
					through: { attributes: [] },
				},
			],
		});
		if (projects === null) {
			res.status(404).json('No results');
		} else {
			res.json(projects);
		}
	} catch (err) {
		res.status(500).json(err.toString());
	}
};
