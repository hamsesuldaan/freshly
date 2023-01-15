const users = require('../../data/users')
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const { user } = new PrismaClient()


exports.loginPageController = (req, res) => {
  res.locals = { title: "Dashboard" };

  res.render("auth/auth-login", {
    layout: "./auth/layouts/authLayout",
    message: req.flash("message"),
    error: req.flash("error"),
  });
};

exports.loginController = async (req, res) => {
  // console.log(req.body);

  const logedUser = await user.findUnique({

    where: {
      username: req.body.username
    }
  })

  if (logedUser === null) {
    req.flash("error", "Incorrect email or password!");
    res.redirect("/auth/login");

  } else {
    // console.log(req.body.password);
    // console.log(2);
    const ismached = await bcrypt.compare(
      req.body.password,
      logedUser.password
    );
    if (logedUser.username === req.body.username) {
      sess = req.session;

      sess.user = logedUser;
      res.redirect("/admin");

    } else {
      req.flash('error', "wrong email & password!");
      res.redirect('/auth/login');

    }

  }

};



//   if (validUser["length"] === 1) {
//     // Assign value in session
//     sess = req.session;
//     sess.user = validUser;

//     res.redirect("/admin");
//   } else {
//     req.flash("error", "Incorrect email or password!");
//     res.redirect("/auth/login");
//   }
//