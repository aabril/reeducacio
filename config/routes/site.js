const passportConfig = require('../passport');

const homeController = require('../../controllers/site/home');
const userController = require('../../controllers/site/user');
const contactController = require('../../controllers/site/contact');

const authService = require('../authService');

module.exports = function(app){
    app.get('/site/', homeController.index);
    app.get('/site/login', userController.getLogin);
    app.post('/site/login', userController.postLogin);
    app.get('/site/logout', userController.logout);
    app.get('/site/forgot', userController.getForgot);
    app.post('/site/forgot', userController.postForgot);
    app.get('/site/reset/:token', userController.getReset);
    app.post('/site/reset/:token', userController.postReset);
    app.get('/site/signup', userController.getSignup);
    app.post('/site/signup', userController.postSignup);
    app.get('/site/contact', contactController.getContact);
    app.post('/site/contact', contactController.postContact);
    app.get('/site/account', passportConfig.isAuthenticated, userController.getAccount);
    app.post('/site/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
    app.post('/site/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
    app.post('/site/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
    app.get('/site/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);
}