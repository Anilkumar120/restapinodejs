const mongoose = require("mongoose");



const ConnectDB =(uri)=>{
    console.log("database conact");
    return mongoose.connect(uri);
}

module.exports =ConnectDB;