const Reward = require('../../models/Reward');

exports.list = (req, res) => {
  Reward.find({}, (err, rewards) => {
      if (err) { return next(err); }
      res.render('admin/rewards/index', { section: 'rewards', rewards: rewards });
  });
};

exports.edit = (req, res) => {
  res.render('admin/rewards/edit', {});
};

exports.getNew = (req, res) => {
  res.render('admin/rewards/new', {});
};

exports.postNew = (req, res) => {
  res.render('admin/rewards/new', {});
};