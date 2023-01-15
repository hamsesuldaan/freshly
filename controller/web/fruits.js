 const listOfFruits =require ('../../data/fruits')

exports.fruitsController = (req, res) => {
  res.render("web/fruits", { khudaar: listOfFruits });
};

// exports.addFruitsController = (req, res) => {
//   res.render("web/addfruits", { khudaar: listOfFruits });
// };

exports.addFruitFormController = (req, res) => {
  res.render("web/addFruits");
};

exports.addFruitController = (req, res) => {

  console.log("yessss");

  listOfFruits.push(req.body);

  res.redirect("fruits");
};

exports.deleteFruitController = (req, res) => {
  const id = req.params.id;

  listOfFruits = listOfFruits.filter((fruit) => fruit.id !== id);

  res.json();
};

exports.updateFruitFormController = (req, res) => {
  const id = req.params.id;


  const targetFruit = listOfFruits.filter((filter) => filter.id === id);

  res.render("web/updateFruit", { fruit: targetFruit[0] });
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
