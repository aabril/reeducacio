const passport = require('passport');

exports.dashboard = (req, res) => {
  if(req.user && req.user.role==="admin"){
    res.render('admin/dashboard', { title: 'Admin' });
  }else{
    res.redirect('/admin/login');
  }
};

exports.loginGet = (req, res) => {

  if(req.user && req.user.role==="admin"){
    res.redirect('/admin');
  }else{
    res.render('admin/login', {
      title: 'Admin'
    });
  }



};

exports.loginPost = (req, res) => {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {

    console.log(errors);

    req.flash('errors', errors);
    return res.redirect('/admin/login');
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
      req.flash('errors', info);
      return res.redirect('/admin/');
    }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      req.flash('success', { msg: 'Success! You are logged in.' });
      res.redirect(req.session.returnTo || '/');
    });
  })(req, res, next);
};