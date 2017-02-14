const passportConfig = require('../passport');
const homeController = require('../../controllers/custom/home');
const authService = require('../authService');
const lessExpress = require('less-express')

const path = require('path');
const customMainLessPath = path.join(__dirname, '../../public/custom/styles/main.less');

module.exports = function(app){
    app.get('/', homeController.index);
    app.get('/custom/styles/main.min.css', lessExpress(customMainLessPath));
}