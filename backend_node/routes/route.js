const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser"); // passing cookie between both end

const {testingRoute, testText} = require("../routecontroller/routefunction"); // importing routing functions
router.use(cookieParser());
router.use(express.json());

// **********************************************************************************************   TESTING ROUTE
router.get("/test", testingRoute);

//  *********************************************************************************************  TEXT ANALYSIS ROUTE
router.post("/checktext",testText )

module.exports = router; //exporting to use in index.js