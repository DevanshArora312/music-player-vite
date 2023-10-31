const express = require('express');
require("dotenv").config();
const app = express();
const cors = require("cors");
const creatAccountRoutes = require("./routes/accountRoutes");
const linkRoutes = require("./routes/linkRoutes");


app.use(express.json());
app.use(cors());

app.use("/api/v1",creatAccountRoutes);
app.use("/api/v1/get-link",linkRoutes);

app.listen(process.env.PORT,()=>{
    console.log("listening for req");
})

const dbConnect = require("./config/database")
dbConnect();

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
})