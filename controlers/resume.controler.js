const db = require('../models');
const moment = require('moment');

exports.findAll = async (_req, res) => {
	try {
		const resume = await db.Resume.findAll({
			order: [['start', 'ASC']],
			attributes: {
				exclude: ['createdAt', 'updatedAt'],
			},
		});
		if (resume === null) {
			res.status(404).json('No results');
		}

		const formated = resume.map((item) => {
			item.title =
				moment(item.start, 'YYYY-MM-DD').format('MMM YYYY') +
				(item.end
					? ' - ' + moment(item.end, 'YYYY-MM-DD').format('MMM YYYY')
					: '');
			delete item.dataValues.start;
			delete item.dataValues.end;

			return { ...item.dataValues, title: item.title };
		});
		res.json(formated);
	} catch (err) {
		res.status(500).json(err.toString());
	}
};

exports.findOne = async (req, res) => {
	try {
		const resume = await db.Resume.findByPk(req.params.id);
		if (!resume) return res.status(404).json('No result found');
		res.json(resume);
	} catch (err) {
		res.status(500).json(err.toString());
	}
};

exports.findAllPdf = async (_req, res) => {
	try {
		const pdf = await db.Pdf.findAll({});
		if (pdf === null) return res.status(404).json('No results');
		res.json(pdf);
	} catch (err) {
		res.status(500).json(err.toString());
	}
};
exports.findPdf = async (_req, res) => {
	try {
		const pdf = await db.Pdf.findOne({
			where: {
				active: true,
			},
		});
		if (pdf === null) return res.status(404).json('No results');
		res.json(pdf);
	} catch (err) {
		res.status(500).json(err.toString());
	}
};

exports.create = async (req, res) => {
	try {
		const newResume = await db.Resume.create(req.body);
		console.log(newResume);
		res.json({ success: `New experience added`, newResume });
	} catch (err) {
		res.status(500).json(err.toString());
	}
};

exports.uploadPdf = async (req, res) => {
	try {
		const name = req.files[0].name;
		await db.Pdf.update(
			{
				active: false,
			},
			{
				where: { active: true },
				returning: true,
				plain: true,
			},
		);
		await db.Pdf.create({
			name,
			active: true,
		});

		res.json({ success: `New CV added !` });
	} catch (err) {
		console.error(err);
		res.status(500).json(err.toString());
	}
};

exports.update = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		await db.Resume.update(req.body, {
			where: { id },
			raw: false,
		});

		res.json({
			success: `Experience ${id} successfully updated`,
			update: req.body,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err.toString());
	}
};

exports.updatePdfs = async (req, res) => {
	try {
		await db.Pdf.update(
			{
				active: false,
			},
			{
				where: {
					active: true,
				},
			},
		);
		await db.Pdf.update(
			{
				active: true,
			},
			{
				where: {
					id: req.body.id,
					// returning: true,
					// plain: true,
				},
			},
		);

		res.json({ success: `Pdf updated!` });
	} catch (err) {
		res.status(500).json(err.toString());
	}
};

exports.delete = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		await db.Resume.destroy({
			where: { id },
		});

		res.json({ success: `Experience ${id} successfully deleted` });
	} catch (err) {
		res.status(500).json(err.toString());
	}
};
