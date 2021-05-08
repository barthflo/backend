const multer = require('multer');
const multerS3 = require('multer-s3-transform');
const AWS = require('aws-sdk');
const sharp = require('sharp');

const s3 = new AWS.S3({
	region: process.env.REGION,
});

const upload = multer({
	storage: multerS3({
		s3,
		bucket: process.env.BUCKET,
		shouldTransform: function (req, file, cb) {
			// console.log(file);
			cb(null, /^image/i.test(file.mimetype));
			req.body.uid = Date.now();
		},
		transforms: [
			{
				id: 'resized',
				key: function (req, file, cb) {
					if (req.body.filename) {
						file.id = req.body.filename;
					}

					if (file.mimetype === 'image/jpeg') {
						if (typeof req.body.filename === 'object') {
							const filename = req.body.filename.pop();
							file.name =
								req.body.uid +
								'-' +
								filename.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
						} else {
							file.name =
								req.body.uid +
								'-' +
								req.body.filename
									.normalize('NFD')
									.replace(/[\u0300-\u036f]/g, '');
						}
					}
					cb(null, 'uploads/' + file.name);
				},
				transform: function (req, file, cb) {
					cb(null, sharp().resize(1000).jpeg());
				},
			},
		],
		key: function (req, file, cb) {
			file.name =
				Date.now() +
				'-' +
				file.originalname.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
			cb(null, 'uploads/' + file.name);
		},
	}),
});

const deleteMultiple = async (array) => {
	try {
		const response = await s3
			.deleteObjects({
				Bucket: process.env.BUCKET,
				Delete: {
					Objects: array.map((item) => {
						return { Key: `uploads/${item}` };
					}),
				},
			})
			.promise();
		console.log(response);
	} catch (err) {
		console.log(err);
	}
};
module.exports = { upload, deleteMultiple };
