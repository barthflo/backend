const db = require('../models');
const moment = require('moment');

exports.findAll = async (_req, res) => {
	try {
		const resume = await db.Resume.findAll({
			order: [['start', 'ASC']],
			attributes: {
				exclude: ['createdAt', 'updatedAt', 'id'],
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

exports.findPdf = async (req, res) => {
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
