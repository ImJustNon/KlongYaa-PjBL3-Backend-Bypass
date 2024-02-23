const express = require("express");
const router = express.Router();
const { checkTime, deleteTime, updateStatus } = require("../controllers/non.controller");
const kaoController = require("../controllers/kao.controller");
const bodyparser = require("body-parser");
const urlEncoded = bodyparser.urlencoded({
    extended: true,
    limit: "50mb",
});

router.post("/non/checktime", checkTime);
router.post("/non/removetime", deleteTime);
router.post("/non/updatestatus", updateStatus);

router.post("/kao/testpost", urlEncoded, kaoController.testpost);
router.post("/kao/checktime", kaoController.checkTime);
router.post("/kao/timestamp", kaoController.studentTimestamp);
router.post("/kao/stopalert", kaoController.stopAlert);

module.exports = router;