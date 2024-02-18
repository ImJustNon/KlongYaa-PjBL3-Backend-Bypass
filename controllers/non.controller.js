const axios = require("axios");

async function checkTime(req, res){
    const { boxId, currentTime } = req.body ?? {};
    if(!boxId || !currentTime){
        return res.json({
            status: "FAIL",
            message: "Please complete your information"
        });
    }

    const fetchAlertCheck = await axios.post("https://klongyaa-api.it-project.site/api/alert/check", {
        boxId: boxId,
        currentTime: currentTime
    }, {
        headers: {
          'Content-Type': 'application/json'
        }
    });

    return res.json(fetchAlertCheck.data);
}

async function deleteTime(req, res){
    const { boxId, alertId, secretApiKey } = req.body ?? {};

    if(!boxId || !alertId || !secretApiKey){
        return res.json({
            status: "FAIL",
            message: "Please complete your information"
        });
    }

    const fetchDeleteAlert = await axios.post("https://klongyaa-api.it-project.site/api/alert/removeforbox", {
        boxId: boxId,
        alertId: alertId,
        secretApiKey: secretApiKey
    }, {
        headers: {
          'Content-Type': 'application/json'
        }
    });

    return res.json(fetchDeleteAlert.data);
}

module.exports = {
    checkTime,
    deleteTime,
}