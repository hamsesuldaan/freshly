let listOfFruits = require("../../data/fruits")


exports.ListtOfFruitsController = async (req, res) => {
  res.locals = { title: "Fruits", user: req.session.user };69

  // console.log(await user.findMany());
  res.render("./admin/fruits", {
    layout: "./admin/layouts/adminLayout",
    fruits:listOfFruits
  });
  // res.render('/admin/users', { layout: './admin/layouts/adminLayout'})
};


 exports.addFruitPageController = (req, res) => {
  res.locals = {
    title: "listOfFruits",
    user: req.session.user ,listOfFruits ,
  };

  res.render("admin/addFruit", {
    layout: "./admin/layouts/adminLayout",
    fruits: listOfFruits,
  });

  // update
  
};
exports.addFruitscontroller = (req, res) => {
  // console.log('yeees');

  listOfFruits.push(req.body);

  res.redirect("/admin/fruits");
};



exports.updateFruitFormController = (req, res) => {
  const id = req.params.id;


  const targetFruit = listOfFruits.filter((fruit) => fruit.id === id);

  res.locals = {
    title: "listOfFruits",
    user: req.session.user, fruit: listOfFruits[0],
  };
  res.render("admin/updateFruit", { user: targetFruit, layout: "./admin/layouts/adminLayout" });
};


exports.updateFruitController = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  for (const fruit of listOfFruits) {
    if ((fruit.id === id)) {
      fruit.id = data.id;
      fruit.name = data.name;
      fruit.price = data.price;
      fruit.discount = data.discount;
      fruit.detail = data.detail;
      fruit.image = data.image;

      break;
    }
  }

  res.json();
};

// deleete 


exports.deleteFruitController = (req, res) => {
  const id = req.params.id;

  listOfFruits = listOfFruits.filter((fruit) => fruit.id !== id);

  res.json();
};




















// exports.addUserPageController = (req, res) => {
//   res.locals = {
//     title: "users",
//     user: req.session.user[0],
//   };

//   res.render("admin/addUser", {
//     layout: "./admin/layouts/adminLayout",
//     users: users,
//   });
// };



// exports.addUsercontroller = async (req, res) => {
//   // console.log('yeees');

//   // users.push(req.body);
//   await user.create({ data: req.body })

//   res.redirect("/admin/users");
// };
// // deleete 
// exports.deleteUserController = async(req, res) => {
//   // let id = req.params.id;
//   // console.log(id);

//   // users = users.filter((user) => user.id !== id);

//   // // console.log(tijaabo[0]);
//   const deleteUser = await user.delete({ 
//     where: { id: Number(req.params.id) }, 
  
//   })

//   res.json();
// };

// // update 
// // const targetUser = users.filter((user) => user.id === id);

// exports.updateUserFormController = async(req, res) => {
//   const id = req.params.id;



//   const targetUser = await user.findUnique({
//     where: {
//       id: Number(id),
//     },
//   })

//   res.locals = {
//     title: "users",
//     user: req.session.user[0],
//   };
//   res.render("admin/updateUser", { user: targetUser, layout: "./admin/layouts/adminLayout" });
// };

// exports.updateUserController = async (req, res) => {

//   const updateUser = await user.update({ 
//     where: { id: Number(req.params.id)}, 
//     data: req.body
//   })


//   res.json();
// };
