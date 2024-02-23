const axios = require("axios");

async function checkTime(req, res){
    const { boxId, currentTime } = req.body ?? {};
    if(!boxId || !currentTime){
        return res.json({
            status: "FAIL",
            message: "Please complete your information"
        });
    }

    try {
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
    catch(e){
        console.log(e);
    }
}

async function deleteTime(req, res){
    const { boxId, alertId, secretApiKey } = req.body ?? {};

    if(!boxId || !alertId || !secretApiKey){
        return res.json({
            status: "FAIL",
            message: "Please complete your information"
        });
    }

    try{
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
    catch(e){
        console.log(e);
    }
}

async function updateStatus(req, res){
    const { boxId } = req.body ?? {};

    if(!boxId){
        return res.json({
            status: "FAIL",
            message: "Please complete your information"
        });
    }

    try{
        const fetchUpdateStatus = await axios.post("https://klongyaa-api.it-project.site/api/client/status/update", {
            boxId: boxId,
        }, {
            headers: {
            'Content-Type': 'application/json'
            }
        });

        return res.json(fetchUpdateStatus.data);
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    checkTime,
    deleteTime,
    updateStatus
}