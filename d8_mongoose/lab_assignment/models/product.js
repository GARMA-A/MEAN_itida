const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  catregory: [   {
      cname: { type: String },
      slug: { type: String}
    } ],
  userId: { type: mongoose.Schema.Types.ObjectId, ref:"user" },
});

var productModel=mongoose.model("product",productSchema)
module.exports={productModel}