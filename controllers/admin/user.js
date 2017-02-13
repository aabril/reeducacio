const User = require('../../models/User');
const moment = require('moment');


exports.list = (req, res) => {
  const renderVars = {
      title: "Usuaris",
      nav_section: "users",
      tab_title: "» Usuaris"
  };
  User.find({}, (err, users) => {
      if (err) { return next(err); }
      for (i = 0; i < users.length; i++) { 
        users[i].createdString = moment(users[i].createdAt).format('LLLL');
      }
      renderVars.users = users;
      res.render('admin/users/list', renderVars);
  });
};

exports.edit = (req, res) => {
  const renderVars = {
      title: "Usuaris",
      nav_section: "users",
      tab_title: "» Usuaris »"
  };
  res.render('admin/users/edit', renderVars);
};

exports.getNew = (req, res) => {
  res.render('admin/users/new', {});
};

exports.postNew = (req, res) => {
  res.render('admin/users/new', {});
};