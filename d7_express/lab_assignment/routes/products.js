const express = require("express");
var router = express.Router();
const { getAllProducts, createNewProduct, updateProduct, deleteProduct, getProductByName } = require("../controllers/products")
router.get("/", getAllProducts);
router.post("/create-product", createNewProduct);
router.put("/:name", updateProduct)
router.delete("/:name", deleteProduct)
router.get("/:name", getProductByName)
module.exports = router;
