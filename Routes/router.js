const express = require("express");
const router = new express.Router();
const upload = require("../multerconfig/storageConfig");
const controllers = require("../Controllers/userControllers");


//routes
router.post("/user/register",upload.single("user_profile"),controllers.userpost);
router.get("/user/details",controllers.userget);
router.get("/user/:id",controllers.singleuserget);
router.put("/user/edit/:id",upload.single("user_profile"),controllers.useredit)
router.delete("/user/delete/:id",controllers.userdelete);
router.put("/user/status/:id",controllers.userstatus);
router.get("/exportcsv",controllers.userExport);

module.exports = router;