require('dotenv').config();

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: 'mysql',
		dialectOptions: {
			bigNumberStrings: true,
		},
		migrationStorage: 'json',
	},
	//   production: {
	//     username: process.env.PROD_DB_USERNAME,
	//     password: process.env.PROD_DB_PASSWORD,
	//     database: process.env.PROD_DB_NAME,
	//     host: process.env.PROD_DB_HOSTNAME,
	//     port: process.env.PROD_DB_PORT,
	//     dialect: 'mysql',
	//     dialectOptions: {
	//       bigNumberStrings: true,
	//       ssl: {
	//         ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
	//       }
	//     }
	//   }
};
