const express = require("express");
const app = express();
app.use(express.json())
const produtsRoutes = require("./routes/products")

app.use('/', produtsRoutes)
app.listen(3000, () => {
  console.log("hello from express server");
});
