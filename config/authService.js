exports.isAdmin = (req, res, next) => {
  if(req.user && req.user.role==="admin"){
    next()
  }else{
    res.render('admin/login', {
      title: 'Admin'
    });
  }
};