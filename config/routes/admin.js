const adminController = require('../../controllers/admin');
const authService = require('../authService');

module.exports = function(app){
    app.get('/admin', authService.isAdmin, adminController.dashboard.get);
    app.get('/admin/dashboard', authService.isAdmin, adminController.dashboard.get);

    app.get('/admin/users', authService.isAdmin, adminController.user.list);
    app.get('/admin/user/list', authService.isAdmin, adminController.user.list);
    app.get('/admin/user/new', authService.isAdmin, adminController.user.getNew);
    app.post('/admin/user/new', authService.isAdmin, adminController.user.postNew);
    app.get('/admin/user/edit/:id', authService.isAdmin, adminController.user.edit);

    app.get('/admin/articles', authService.isAdmin, adminController.article.list);
    app.get('/admin/article/list', authService.isAdmin, adminController.article.list);
    app.get('/admin/article/new', authService.isAdmin, adminController.article.getNew);
    app.post('/admin/article/new', authService.isAdmin, adminController.article.postNew);
    app.get('/admin/article/edit/:id', authService.isAdmin, adminController.article.edit);

    app.get('/admin/rewards', authService.isAdmin, adminController.reward.list);
    app.get('/admin/reward/list', authService.isAdmin, adminController.reward.list);
    app.get('/admin/rewards/new', authService.isAdmin, adminController.reward.getNew);
    app.post('/admin/rewards/new', authService.isAdmin, adminController.reward.postNew);
    app.get('/admin/rewards/edit/:id', authService.isAdmin, adminController.reward.edit);

    app.get('/admin/settings', authService.isAdmin, adminController.settings.get);

    app.get('/admin/login', adminController.login.get);
    app.post('/admin/login', adminController.login.post);
}