const passportConfig = require('../passport');
const apiController = require('../../controllers/site/api');

const path = require('path');
const multer = require('multer');
const multerOptions = { 
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '../../uploads'))
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);        
        }
    })
};
const upload = multer(multerOptions);

module.exports = function(app){
    app.get('/site/api', apiController.getApi);
    app.get('/site/api/lastfm', apiController.getLastfm);
    app.get('/site/api/nyt', apiController.getNewYorkTimes);
    app.get('/site/api/aviary', apiController.getAviary);
    app.get('/site/api/steam', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getSteam);
    app.get('/site/api/stripe', apiController.getStripe);
    app.post('/site/api/stripe', apiController.postStripe);
    app.get('/site/api/scraping', apiController.getScraping);
    app.get('/site/api/twilio', apiController.getTwilio);
    app.post('/site/api/twilio', apiController.postTwilio);
    app.get('/site/api/clockwork', apiController.getClockwork);
    app.post('/site/api/clockwork', apiController.postClockwork);
    app.get('/site/api/foursquare', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFoursquare);
    app.get('/site/api/tumblr', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTumblr);
    app.get('/site/api/facebook', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFacebook);
    app.get('/site/api/github', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getGithub);
    app.get('/site/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTwitter);
    app.post('/site/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postTwitter);
    app.get('/site/api/linkedin', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getLinkedin);
    app.get('/site/api/instagram', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getInstagram);
    app.get('/site/api/paypal', apiController.getPayPal);
    app.get('/site/api/paypal/success', apiController.getPayPalSuccess);
    app.get('/site/api/paypal/cancel', apiController.getPayPalCancel);
    app.get('/site/api/lob', apiController.getLob);
    app.get('/site/api/upload', apiController.getFileUpload);
    app.post('/site/api/upload', upload.single('myFile'), apiController.postFileUpload);
    app.get('/site/api/pinterest', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getPinterest);
    app.post('/site/api/pinterest', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postPinterest);
    app.get('/site/api/google-maps', apiController.getGoogleMaps);
}