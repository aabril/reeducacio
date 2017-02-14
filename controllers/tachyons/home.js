/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('tachyons/home', {
    title: 'Home'
  });
};
