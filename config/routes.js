const passportConfig = require('./passport');

const path = require('path');

const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, 'uploads') });


/**
 * Controllers (route handlers).
 */
const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const apiController = require('../controllers/api');
const contactController = require('../controllers/contact');
const adminController = require('../controllers/admin');

module.exports = function(app){
    /**
     * Primary app routes.
     */
    app.get('/', homeController.index);

    app.get('/admin', adminController.dashboard);

    app.get('/admin/dashboard', adminController.dashboard);
    app.get('/admin/users', adminController.users);
    app.get('/admin/articles', adminController.articles);
    app.get('/admin/rewards', adminController.rewards);
    app.get('/admin/settings', adminController.settings);

    app.get('/admin/login', adminController.loginGet);
    app.post('/admin/login', adminController.loginPost);
    
    app.get('/login', userController.getLogin);
    app.post('/login', userController.postLogin);
    app.get('/logout', userController.logout);
    app.get('/forgot', userController.getForgot);
    app.post('/forgot', userController.postForgot);
    app.get('/reset/:token', userController.getReset);
    app.post('/reset/:token', userController.postReset);
    app.get('/signup', userController.getSignup);
    app.post('/signup', userController.postSignup);
    app.get('/contact', contactController.getContact);
    app.post('/contact', contactController.postContact);


    app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
    app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
    app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
    app.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
    app.get('/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);

    /**
     * API examples routes.
     */
    app.get('/api', apiController.getApi);
    app.get('/api/lastfm', apiController.getLastfm);
    app.get('/api/nyt', apiController.getNewYorkTimes);
    app.get('/api/aviary', apiController.getAviary);
    app.get('/api/steam', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getSteam);
    app.get('/api/stripe', apiController.getStripe);
    app.post('/api/stripe', apiController.postStripe);
    app.get('/api/scraping', apiController.getScraping);
    app.get('/api/twilio', apiController.getTwilio);
    app.post('/api/twilio', apiController.postTwilio);
    app.get('/api/clockwork', apiController.getClockwork);
    app.post('/api/clockwork', apiController.postClockwork);
    app.get('/api/foursquare', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFoursquare);
    app.get('/api/tumblr', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTumblr);
    app.get('/api/facebook', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFacebook);
    app.get('/api/github', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getGithub);
    app.get('/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTwitter);
    app.post('/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postTwitter);
    app.get('/api/linkedin', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getLinkedin);
    app.get('/api/instagram', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getInstagram);
    app.get('/api/paypal', apiController.getPayPal);
    app.get('/api/paypal/success', apiController.getPayPalSuccess);
    app.get('/api/paypal/cancel', apiController.getPayPalCancel);
    app.get('/api/lob', apiController.getLob);
    app.get('/api/upload', apiController.getFileUpload);
    app.post('/api/upload', upload.single('myFile'), apiController.postFileUpload);
    app.get('/api/pinterest', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getPinterest);
    app.post('/api/pinterest', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postPinterest);
    app.get('/api/google-maps', apiController.getGoogleMaps);
}