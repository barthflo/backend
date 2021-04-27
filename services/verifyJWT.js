const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
	const token = req.cookies.accessToken;
	if (!token) {
		res.status(401).json('Not authorized');
		return;
	}
	jwt.verify('fake', process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			res.status(401).json('Verification failed');
		} else {
			next();
		}
	});
};

module.exports = { verifyJWT };
