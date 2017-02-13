const Reward = require('../../models/Reward');

exports.list = (req, res) => {
  const renderVars = {
      title: "Recompenses",
      nav_section: "rewards",
      tab_title: "» Recompenses"
  };
  Reward.find({}, (err, rewards) => {
      if (err) { return next(err); }
      renderVars.rewards = rewards;
      res.render('admin/rewards/list', renderVars);
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