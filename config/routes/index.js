module.exports = function(app){
    require('./site')(app);
    require('./site_api_samples')(app);
    require('./admin')(app);
    require('./custom')(app);
    require('./tachyons')(app);
}