/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('site/home', {
    title: 'Home'
  });
};
