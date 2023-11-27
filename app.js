const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn.js");
const router = require("./Routes/router.js");
const PORT = process.env.PORT || 8080
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("./uploads"));
app.use("/files",express.static("./public/files"));

app.use(router);


app.listen(PORT,()=>{
    console.log(`Server start at port ${PORT}`);
});

