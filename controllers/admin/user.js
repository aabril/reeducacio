const User = require('../../models/User');
const moment = require('moment');


exports.list = (req, res) => {
  User.find({}, (err, users) => {
      if (err) { return next(err); }
      for (i = 0; i < users.length; i++) { 
        users[i].createdString = moment(users[i].createdAt).format('LLLL');
      }
      res.render('admin/users/index', { section: 'users', users: users });
  });
};

exports.edit = (req, res) => {
  res.render('admin/users/edit', {});
};

exports.getNew = (req, res) => {
  res.render('admin/users/new', {});
};

exports.postNew = (req, res) => {
  res.render('admin/users/new', {});
};