const { productModel } = require("../models/product");
const getAllProduct = async (req, res) => {
  const products = await productModel.find().populate("userId");
  res.status(200).json({ message: "all Products", products });
};
const createProduct = async (req, res) => {
  const product = req.body;
  try {
    const newProduct = await productModel.create(product);
    res.status(201).json({message:"new product created",newProduct})
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
module.exports={getAllProduct,createProduct}
///update user delete getby id
///register login 
//validate filelds
