"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', '..', 'Config', 'config.json'))[env];
// var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};
console.log('env',env)
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
	.readdirSync(__dirname)
	.filter(function (file) {
		return (file.indexOf(".") !== 0) && (file !== "index.js");
	})
	.forEach(function (file) {
		// var model = sequelize.import(path.join(__dirname, file));
		var model = require(path.join(__dirname, file))(sequelize, Sequelize);
		//console.log(db[model.name],':',model)
		db[model.name] = model;
	});
Object.keys(db).forEach(function (modelName) {
	if ("associate" in db[modelName]) {
		db[modelName].associate(db);
	}
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;
// sequelize.findOne({
// 	where: {
// 		email: email
// 	}
// })
// console.log('db.user', db.User.findOne({ "id" : "1" }));
// db.User.findOne({
// 	where: {
// 		"id": "1"
// 	}
// }).then(function (user) {
// 	if (user) {
		
// 		console.log('findOne user',user)
// 	} else {
// 		console.log('err');
		
		

// 	}

// })
module.exports = db;