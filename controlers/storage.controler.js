const AWS = require('aws-sdk');
require('dotenv').config();

const s3 = new AWS.S3({
	region: process.env.REGION,
});

exports.findOne = async (req, res) => {
	try {
		const object = await s3
			.getObject({
				Bucket: process.env.BUCKET,
				Key: 'uploads/' + req.params.file,
			})
			.promise();
		res.setHeader('Content-Type', object.ContentType);
		res.setHeader('Content-Length', object.ContentLength);
		if (object.ContentType === 'application/pdf') {
			res.setHeader(
				'Content-Disposition',
				'attachment; filename=' +
					req.params.file.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
			);
		}
		const stream = await s3
			.getObject({
				Bucket: process.env.BUCKET,
				Key: 'uploads/' + req.params.file,
			})
			.createReadStream();
		stream.pipe(res);
	} catch (err) {
		res.status(500).json(err.toString());
	}
};
