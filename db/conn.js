const mongoose = require("mongoose");
const DB = process.env.MONGO_URI;
mongoose.connect(DB,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Database Connected..");
}).catch((err)=>{
    console.log("Database not connected...",err);
})