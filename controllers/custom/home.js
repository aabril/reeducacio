/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('custom/home', {
    title: 'Home'
  });
};
