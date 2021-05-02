const db = require('../models');

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

exports.create = async (req, res) => {
	try {
		console.log(req.body);
		const newProject = await db.Project.create({
			title: req.body.title,
			description: req.body.description,
			link_url: req.body.url,
		});
		newProject.addCategory(req.body.results);
		console.log(newProject);
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
	const id = parseInt(req.params.id);
	try {
		await db.Project.update(req.body, {
			where: { id },
		});
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
		await db.Project.destroy({
			where: { id },
		});
		res.json({ success: `Project ${id} successfully deleted` });
	} catch (err) {
		res.status(500).json(err.toString());
	}
};
