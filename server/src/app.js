/* require("dotnenv").config(); */
const express= require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("../models/userschema");

// dotenv.config();
const cors = require("cors");
const router = require("../Routing/router");


const port = process.env.PORT || 8003;

require("../db/conn");

app.use(cors());
app.use(express.json());
app.use("/router", router);
app.use("/userscheme",users);

//app.use('/routes/router.js',router);

app.get("/",(req,res)=>{
    res.json("server start running on 8003");
})

//app.use(users);
app.listen(port,()=>{
    console.log("server is start port number",port);
});