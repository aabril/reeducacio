const passport = require('passport');
const moment = require('moment');

const User = require('../../models/User');
const Article = require('../../models/Article');
const Reward = require('../../models/Reward');

exports.loginGet = (req, res) => {
  if(req.user && req.user.role==="admin"){
    res.redirect('/admin');
  }else{
    res.render('admin/login', {
      title: 'Admin'
    });
  }
};

exports.loginPost = (req, res, next) => {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  console.log("=====");
  console.log("loginPost");
  console.log(req.body);
  console.log("=====");

  const errors = req.validationErrors();

  if (errors) {

    console.log("loginPost > errors");
    console.log(errors);

    req.flash('errors', errors);
    return res.redirect('/admin/login');
  }

  console.log("pre passport authenticate");

  passport.authenticate('local', (err, user, info) => {

    if (err) { 
      console.log("passport authenticat err: ", err);
      return next(err); 
    }

    if (!user) {
      console.log("passport authenticate !user ");
      req.flash('errors', info);
      return res.redirect('/admin/');
    }
    req.logIn(user, (err) => {
      if (err) { 
        console.log("passport authenticate logIn err: ", err);
        return next(err); 
      }

      console.log("passport authenticate logIn user: ", user);

      req.flash('success', { msg: 'Success! You are logged in.' });
      res.redirect('/admin/' || '/');
    });
  })(req, res, next);
};


exports.dashboard = (req, res) => {
    res.render('admin/dashboard/index', { section: 'dashboard'});
};


// -- Users

exports.userList = (req, res) => {
  User.find({}, (err, users) => {
      if (err) { return next(err); }
      for (i = 0; i < users.length; i++) { 
        users[i].createdString = moment(users[i].createdAt).format('LLLL');
      }
      res.render('admin/users/index', { section: 'users', users: users });
  });
};

exports.userEdit = (req, res) => {
  res.render('admin/users/edit', {});
};

exports.userNewGet = (req, res) => {
  res.render('admin/users/new', {});
};

exports.userNewPost = (req, res) => {
  res.render('admin/users/new', {});
};

// -- Articles

exports.articleList = (req, res) => {
  Article.find({}, (err, articles) => {
      if (err) { return next(err); }

      const renderVars = {
        menu_section: "articles",
        page_title: "» Articles",
        articles: articles
      };

      res.render('admin/articles/index', renderVars);
  });
};

exports.articleEdit = (req, res) => {

  const renderVars = {
      menu_section: "articles",
      page_title: "» Article » Edit"
  };

  res.render('admin/articles/edit', renderVars);
};

exports.articleNewGet = (req, res) => {

  const renderVars = {
      menu_section: "articles",
      page_title: "» Article » New"
  };

  res.render('admin/articles/new', renderVars);
};

exports.articleNewPost = (req, res) => {
  res.render('admin/articles/new', renderVars);
};

// -- Rewards

exports.rewardList = (req, res) => {
  Reward.find({}, (err, rewards) => {
      if (err) { return next(err); }
      res.render('admin/rewards/index', { section: 'rewards', rewards: rewards });
  });
};

exports.rewardEdit = (req, res) => {
  res.render('admin/rewards/edit', {});
};

exports.rewardNewGet = (req, res) => {
  res.render('admin/rewards/new', {});
};

exports.rewardNewPost = (req, res) => {
  res.render('admin/rewards/new', {});
};

// -- Settings

exports.settings = (req, res) => {
  const renderVars = {
    section: 'settings'
  }
  res.render('admin/settings/index', renderVars);
};

