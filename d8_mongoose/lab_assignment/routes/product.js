const express=require("express")
const router=express.Router()
const{getAllProduct,createProduct}=require("../controllers/product")
router.post("/",createProduct)
router.get("/",getAllProduct)
module.exports=router