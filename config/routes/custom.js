const passportConfig = require('../passport');
const homeController = require('../../controllers/custom/home');
const authService = require('../authService');

module.exports = function(app){
    app.get('/', homeController.index);
}