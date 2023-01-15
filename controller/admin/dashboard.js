exports.dashboardPageController = (req,res) =>{
    console.log(req.session);

    res.locals  = { title: 'Dashboard', user: req.session.user};

    res.render('./admin/dashboard', {layout: './admin/layouts/adminLayout'});
    
}