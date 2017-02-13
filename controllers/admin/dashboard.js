exports.get = (req, res) => {
    const renderVars = {
        title: "Panel",
        nav_section: "dashboard",
        tab_title: "» Panel"
    };
    res.render('admin/dashboard/index', renderVars);
};