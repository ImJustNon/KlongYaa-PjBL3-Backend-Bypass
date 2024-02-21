const express = require("express");
const router = express.Router();
const { checkTime, deleteTime } = require("../controllers/non.controller");
const kaoController = require("../controllers/kao.controller");
const bodyparser = require("body-parser");
const urlEncoded = bodyparser.urlencoded({
    extended: true,
    limit: "50mb",
});

router.post("/non/checktime", checkTime);
router.post("/non/removetime", deleteTime);

router.post("/kao/testpost", urlEncoded, kaoController.testpost);
router.post("/kao/checktime", kaoController.checkTime);
router.post("/kao/timestamp", kaoController.studentTimestamp);

module.exports = router;