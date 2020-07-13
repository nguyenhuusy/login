var exports = module.exports = {}
 
exports.signup = function(req, res) {
    console.log('authcontroller.js signup');
    res.render('signup');
 
}
exports.signin = function(req, res) {
    console.log('authcontroller.js signin');
    res.render('signin');
 
}
exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}