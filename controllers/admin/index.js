
exports.login = require('./login');
exports.user = require('./user');
exports.article = require('./article');
exports.reward = require('./reward');

exports.dashboard = (req, res) => {
    res.render('admin/dashboard/index', { section: 'dashboard'});
};

// -- Settings

exports.settings = (req, res) => {
  const renderVars = {
    section: 'settings'
  }
  res.render('admin/settings/index', renderVars);
};

