const fs = require("fs");
var getAllProducts = (req, res) => {
  var products = JSON.parse(fs.readFileSync("products.json", "utf-8"));
  res.json(products);
};

var createNewProduct = (req, res) => {
  var product = req.body;
  var products = JSON.parse(fs.readFileSync("products.json", "utf8"));
  products.push(product);
  fs.writeFileSync("products.json", JSON.stringify(products));
  res.json({ message: "product save successflly" });
};

var updateProduct = (req, res) => {
  const { name } = req.params;
  var prodcuts = JSON.parse(fs.readFileSync("products.json", "utf-8"));
  var updateProdct = req.body;
  const index = prodcuts.findIndex(p => p.name === name)
  if (index === -1) {
    return res.status(404).json({ message: "sorry product not found" })
  }
  prodcuts[index] = { ...prodcuts[index], ...updateProdct }
  fs.writeFileSync("products.json", JSON.stringify(prodcuts))
  res.status(201).json({ message: "update product ", product: prodcuts[index] })

  ////oldProduct p1
  //new product
  ////check p1 id exists
  ///if exist    oldproduct=newproduct
};

var deleteProduct = (req, res) => {
  const { name } = req.params;
  var products = JSON.parse(fs.readFileSync("products.json", "utf-8"));
  const index = products.findIndex(p => p.name === name);
  if (index === -1) {
    return res.status(404).json({ message: "sorry product not found" });
  }
  products.splice(index, 1);
  fs.writeFileSync("products.json", JSON.stringify(products));
  res.status(200).json({ message: "product deleted successfully" });
}

var getProductByName = (req, res) => {
  const { name } = req.params;
  var products = JSON.parse(fs.readFileSync("products.json", "utf-8"));
  const product = products.find(p => p.name === name);
  if (!product) {
    return res.status(404).json({ message: "sorry product not found" });
  }
  res.status(200).json(product);
}



module.exports = {
  getAllProducts, createNewProduct, updateProduct, deleteProduct
  , getProductByName
};
