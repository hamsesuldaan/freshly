let contacts = require('../../data/contact')

exports.contactPageController = (req, res) => {
  // console.log(req.session);
  res.locals = {
    title: "contact",
    user: req.session.user,
    contacts: contacts
  };

  res.render("admin/contact", { layout: "./admin/layouts/adminLayout" });
};

exports.contactPostcontroller = (req, res) => {
  contacts.push(req.body);
  res.locals = { title: 'contact' };
  res.redirect('/contact')
}