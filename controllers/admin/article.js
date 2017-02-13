// -- Articles

const Article = require('../../models/Article');

exports.list = (req, res) => {
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

exports.edit = (req, res) => {

  const renderVars = {
      menu_section: "articles",
      page_title: "» Article » Edit"
  };

  res.render('admin/articles/edit', renderVars);
};

exports.getNew = (req, res) => {

  const renderVars = {
      menu_section: "articles",
      page_title: "» Article » New"
  };

  res.render('admin/articles/new', renderVars);
};

exports.postNew = (req, res) => {
  res.render('admin/articles/new', renderVars);
};