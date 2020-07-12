var authController = require('../controllers/authcontroller');
 
module.exports = function(app) {
    console.log('auth.js');
    app.get('/signin', authController.signin);
    app.get('/signup', authController.signup);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }
 
));
}