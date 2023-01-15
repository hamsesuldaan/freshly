let users = require("../../data/users");
const bcrypt = require ('bcrypt')
const { PrismaClient } = require('@prisma/client')

const { user } = new PrismaClient()


exports.ListtOfUsersController = async (req, res) => {
  res.locals = { title: "Users", user: req.session.user };

  // console.log(await user.findMany());
  res.render("./admin/users", {
    layout: "./admin/layouts/adminLayout",
    users: await user.findMany(),
  });
  // res.render('/admin/users', { layout: './admin/layouts/adminLayout'})
};

exports.addUserPageController = (req, res) => {
  res.locals = {
    title: "users",
    user: req.session.user,
  };

  res.render("admin/addUser", {
    layout: "./admin/layouts/adminLayout",
    users: users,
  });
};



exports.addUsercontroller = async (req, res) => {

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  const userData = { ...req.body, password: hashedPassword };

  const createdUser =await user.create({ data: userData })
  
  res.redirect("/admin/users");
};

// deleete 
exports.deleteUserController = async (req, res) => {
  // let id = req.params.id;
  // console.log(id);

  // users = users.filter((user) => user.id !== id);

  // // console.log(tijaabo[0]);
   await user.delete({
    where: { id: Number(req.params.id) },

  })

  res.json();
};

// update 
// const targetUser = users.filter((user) => user.id === id);

exports.updateUserFormController = async (req, res) => {
  const id = req.params.id;



  const targetUser = await user.findUnique({
    where: {
      id: Number(id),
    },
  })

  res.locals = {
    title: "users",
    user: req.session.user,
  };
  res.render("admin/updateUser", { user: targetUser, layout: "./admin/layouts/adminLayout" });
};

exports.updateUserController = async (req, res) => {

  const updateUser = await user.update({
    where: { id: Number(req.params.id) },
    data: req.body
  })


  res.json();
};
