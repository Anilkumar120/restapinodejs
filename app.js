require("dotenv").config();
const express = require("express");
const app = express();
const ConnectDB =require("./db/connact");
const products_routes = require("./routes/products");

const PORT =process.env.PORT || 5000;
app.get("/", (req, res)=> {
    res.send("Hi, I Am Live.");
});

//middleware or to set Router
app.use("/api/products", products_routes);

const start = async()=> {
    try {
        await ConnectDB(process.env.MOGOODB_URL);
        app.listen(PORT, ()=>{
           console.log( `${PORT} Yes i am Connected`);
                });
    }catch(error){
        console.log(error);
    }
};

start();