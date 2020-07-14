// var express = require('express');
// var app = express();
// var passport = require('passport')
// var session = require('express-session')
// var bodyParser = require('body-parser')
// var env = require('dotenv').config({ path: '../Config/.env' });
// var exphbs = require('express-handlebars')

// //Models
// var models = require("../App/models");
// var modelUser = require("../App/models/user");
// //Sync Database

// //For BodyParser
// //application/... đây là các cách để post dũ liệu trong HTTP.
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(bodyParser.json()); //Cần phải sử dụng bodyParser() nếu muốn dataform có sẵn trnong req.body
// // For Passport

// app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

// app.use(passport.initialize());

// app.use(passport.session()); // persistent login sessions

// app.get('/', function (req, res) {

// 	res.send('Welcome to Passport with Sequelize');

// });
// //For Handlebars
// app.set('views', '../App/views')
// app.engine('hbs', exphbs({
// 	extname: '.hbs'
// }));
// app.set('view engine', '.hbs');
// //Routes
// var authRoute = require('../App/routers/auth.js')(app);
// console.log('models.user',models.user)
// require('../Config/passport/passport')(passport,models.user);
// //Sync Database
// models.sequelize.sync().then(function () {

// 	console.log('Nice! Database looks fine')

// }).catch(function (err) {

// 	console.log(err, "Something went wrong with the Database Update!")

// });
// app.listen(5000, function (err) {

// 	if (!err)
// 		console.log("Site is live");
// 	else console.log(err)

// });
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: null,
	database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 2, 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});