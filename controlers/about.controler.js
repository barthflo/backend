const db = require('../models');
const { deleteMultiple } = require('../services/uploadServices');

exports.findOne = async (_req, res) => {
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

exports.update = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		await db.About.update(req.body, {
			where: { id },
			raw: false,
		});
		const about = await db.About.findByPk(id);

		if (req.body.picturesToRemove) {
			const picturesToRemove = req.body.picturesToRemove
				.split(',')
				.map((item) => item);
			await db.Picture.destroy({
				where: { name: picturesToRemove },
			});
			await deleteMultiple(picturesToRemove.map((picture) => picture));
		}
		if (req.files.length) {
			const pictures = req.files.map((file) => {
				return {
					name: file.name,
					alt: file.name
						.split('-')
						.splice(1)
						.join(' ')
						.split('.')
						.slice(0, -1)
						.join(' '),
					tag: 'about',
				};
			});
			const newPicture = await db.Picture.create(pictures[0]);
			about.setPicture(newPicture);
		}
		res.json({
			success: `Biography successfully updated`,
			update: about,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err.toString());
	}
};
