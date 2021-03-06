const passport = require('passport');

exports.get = (req, res) => {
  if(req.user && req.user.role==="admin"){
    res.redirect('/admin');
  }else{
    res.render('admin/login', {
      title: 'Admin'
    });
  }
};

exports.post = (req, res, next) => {
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


