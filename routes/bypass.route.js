const express = require("express");
const router = express.Router();
const { checkTime, deleteTime } = require("../controllers/non.controller");

router.post("/non/checktime", checkTime);
router.post("/non/removetime", deleteTime);

module.exports = router;