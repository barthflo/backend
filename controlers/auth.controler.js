const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
	try {
		const user = await db.Admin.findOne({
			where: {
				firstname: req.body.name,
			},
		});
		if (user === null) {
			console.error('no user existing');
			res.status(404).json('User Not Found');
		} else {
			const match = await bcrypt.compare(req.body.password, user.password);
			if (match) {
				const token = jwt.sign({ user }, process.env.JWT_SECRET, {
					expiresIn: '24h',
				});

				if (req.cookies) {
					res.cookie('accessToken', token, {
						maxAge: 86400000,
						httpOnly: false,
						secure: process.env.NODE_ENV === 'production' ? true : false,
					});
				}
				res.status(200).json({
					success: 'true',
					token,
					user: { id: user.id, name: user.firstname, surname: user.lastname },
				});
			} else {
				res.status(403).json('Incorrect Password');
			}
		}
	} catch (err) {
		console.log(err);
		res.status(500).json(err.toString());
	}
};
