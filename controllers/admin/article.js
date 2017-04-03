// -- Articles

const Article = require('../../models/Article');

exports.list = (req, res) => {
  const renderVars = {
      title: "Artices",
      nav_section: "articles",
      tab_title: "» Articles"
  };
  Article.find({}, (err, articles) => {
      if (err) { return next(err); }
      renderVars.articles = articles;
      res.render('admin/articles/list', renderVars);
  });
};

exports.edit = (req, res) => {

  const renderVars = {
      nav_section: "articles",
      page_title: "» Article » Edit"
  };

  res.render('admin/articles/edit', renderVars);
};

exports.getNew = (req, res) => {

  const renderVars = {
      nav_section: "articles",
      page_title: "» Article » New"
  };

  res.render('admin/articles/new', renderVars);
};

exports.postNew = (req, res) => {
  const renderVars = {
      nav_section: "articles",
      page_title: "» Article » New"
  };

  const newUser = {
    user: req.user._id,
    title: req.body.title,
    text: req.body.text
  };

  Article.create(newUser, function (err, small) {
    if (err) return res.send(err);
    res.redirect('/admin/articles');
  });

};