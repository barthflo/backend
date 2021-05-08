const db = require('../models');
const { deleteMultiple } = require('../services/uploadServices');

exports.findAll = async (req, res) => {
	try {
		const projects = await db.Project.findAll({
			order: [['createdAt', 'ASC']],
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

exports.findAllCategories = async (req, res) => {
	try {
		const categories = await db.Category.findAll({
			order: [['name', 'ASC']],
		});
		if (categories === null) {
			res.status(404).json('No results');
		} else {
			res.json(categories);
		}
	} catch (err) {
		console.log(err);
		res.status(500).json(err.toString());
	}
};

exports.findOne = async (req, res) => {
	try {
		const project = await db.Project.findOne({
			where: {
				id: req.params.id,
			},
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
		res.json(project);
	} catch (err) {
		console.error(err);
		res.status(500).json(err.toString());
	}
};

exports.create = async (req, res) => {
	try {
		console.log(req.files);
		const newProject = await db.Project.create({
			title: req.body.title,
			description: req.body.description,
			link_url: req.body.link_url,
		});
		const categories = req.body.categories
			.split(',')
			.map((item) => parseInt(item));
		newProject.addCategory(categories);
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
				tag: 'work',
			};
		});
		const newPictures = await db.Picture.bulkCreate(pictures);
		newProject.addPicture(newPictures);
		res.json({ success: `Project ${newProject.id} created!`, newProject });
	} catch (err) {
		console.error(err);
		res.status(500).json(err.toString());
	}
};
exports.createCategory = async (req, res) => {
	try {
		const newCategory = await db.Category.create(req.body);
		console.log(newCategory);
		res.json({ success: `Category ${req.body.name} added`, newCategory });
	} catch (err) {
		console.log(err);
		res.status(500).json(err.toString());
	}
};

exports.update = async (req, res) => {
	console.log(req.body);
	const id = parseInt(req.params.id);
	try {
		await db.Project.update(req.body, {
			where: { id },
			raw: false,
		});
		const project = await db.Project.findByPk(id);
		const categories = req.body.categories
			.split(',')
			.map((item) => parseInt(item));
		project.setCategories(categories);

		if (req.body.picturesToRemove && req.body.picturesToRemove.length > 0) {
			const picturesToRemove = req.body.picturesToRemove
				.split(',')
				.map((item) => item);
			console.log(picturesToRemove);
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
					tag: 'work',
				};
			});
			const newPictures = await db.Picture.bulkCreate(pictures);
			project.addPicture(newPictures);
		}
		res.json({
			success: `Project ${id} successfully updated`,
			update: req.body,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err.toString());
	}
};

exports.delete = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		const pictures = await db.Picture.findAll({
			where: {
				projectId: id,
			},
			attributes: ['name'],
			raw: true,
		});
		await deleteMultiple(pictures.map((p) => p.name));
		await db.Project.destroy({
			where: { id },
		});

		res.json({ success: `Project ${id} successfully deleted` });
	} catch (err) {
		res.status(500).json(err.toString());
	}
};
