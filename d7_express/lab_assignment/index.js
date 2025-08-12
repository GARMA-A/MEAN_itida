////npm init   for init new project in node
///npm i express   framework node (server)
///npm i -g nodemon    for refresh server
const express = require("express");
const app = express();
app.use(express.json())
const produtsRoutes = require("./routes/products")

app.use('/', produtsRoutes)
app.listen(3000, () => {
  console.log("hello from express server");
});
