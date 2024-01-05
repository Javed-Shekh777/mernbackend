const mongoose = require("mongoose");
const DB = process.env.MONGO_URI;
mongoose.connect(DB).then(()=>{
    console.log("Database Connected..");
}).atch((err)=>{
    console.log("Database not connected...",err);
})
