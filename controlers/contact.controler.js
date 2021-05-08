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

exports.update = async (req, res) => {
	delete req.body.uid;
	delete req.body.filename;
	const names = Object.values(req.body.name);
	const ids = Object.values(req.body.id);
	const links = Object.values(req.body.linkTo);
	const files = Object.values(req.files);

	console.log(files);

	try {
		const updated = await db.SocialMedia.bulkCreate(
			Object.keys(req.body).map((item, index) => {
				// console.log(Object.values(req.files));
				return {
					id: ids[index],
					name: names[index],
					linkTo: links[index],
					image: files.some((file) => file.id == ids[index])
						? files.filter((file) => file.id == ids[index])[0].name
						: null,
				};
			}),
			{
				updateOnDuplicate: ['name', 'linkTo', 'image'],
				raw: false,
			},
		);
		// console.log(updated);
		res.json({ success: 'Links updated successfully', updated });
	} catch (err) {
		console.log(err);
		res.status(500).json(err.toString());
	}
};
