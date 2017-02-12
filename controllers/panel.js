/**
 * GET /
 * Panel page.
 */
exports.index = (req, res) => {
  res.render('panel', {
    title: 'panel/index'
  });
};