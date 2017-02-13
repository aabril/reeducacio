exports.get = (req, res) => {
    const renderVars = {
        title: "Settings",
        nav_section: "settings",
        tab_title: "» Settings"
    };
    res.render('admin/settings/index', renderVars);
};

exports.post = (req, res) => {
    const renderVars = {
        title: "Settings",
        nav_section: "settings",
        tab_title: "» Settings"
    };
    res.render('admin/settings/index', renderVars);
};