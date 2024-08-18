require("dotenv").config();
const connectDB = require("./db/connact");
const Product = require("./models/product");
const ProductJson = require("./product.json");

const start = async () => {
    try {
        await connectDB(process.env.MOGOODB_URL); 
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();