const db = require('../models');

exports.findAll = async (req, res) => {
	try {
		const links = await db.SocialMedia.findAll({});
		if (links === null) {
			res.status(404).json('No results');
		} else {
			res.json(links);
		}
	} catch (err) {
		res.status(500).json(err.toString());
	}
};
