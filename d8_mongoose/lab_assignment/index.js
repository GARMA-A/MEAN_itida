const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const port = 3000
app.use(express.json())
const userRoute = require("./routes/user")

const productRoute = require("./routes/product")


app.use('/user', userRoute)
app.use("/product", productRoute)

mongoose.connect("mongodb://127.0.0.1:27017/noon").then(() => {
    console.log("hello from mongodb")
}).catch((err) => {
    console.log(err)
})
app.listen(port, () => {
    console.log(`hello from server ${port}`)
})
