const router = require('express').Router();
const AWS = require('aws-sdk');
require('dotenv').config();

const s3 = new AWS.S3({
	region: process.env.REGION,
});

router.get('/:file', async (req, res) => {
	try {
		const object = await s3
			.getObject({
				Bucket: process.env.BUCKET,
				Key: 'uploads/' + req.params.file,
			})
			.promise();
		res.setHeader('Content-Type', object.ContentType);
		res.setHeader('Content-Length', object.ContentLength);
		const stream = await s3
			.getObject({
				Bucket: process.env.BUCKET,
				Key: 'uploads/' + req.params.file,
			})
			.createReadStream();
		stream.pipe(res);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

module.exports = router;
