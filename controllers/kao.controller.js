const axios = require("axios");

async function testpost(req, res){
    console.log(req.body);
    return res.status(200).json(req.body);
}

async function checkTime(req, res){
    const { secretKey, currentTime } = req.body ?? {};
    
    try {
        const response = await axios.post("http://127.0.0.1:3030/api/checktime", {
            secretKey: secretKey,
            currentTime: currentTime,
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
        });

        return res.json(response.data);
    }
    catch(e){
        console.log(e);
    }
}

async function studentTimestamp(req, res){
    const { secretKey, studentId } = req.body ?? {};
    
    const currentTime = String(new Date().getTime())
    try {
        const response = await axios.post("http://127.0.0.1:3030/api/timestamp", {
            secretKey: secretKey,
            studentId: studentId,
            timestamp: currentTime
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
        });

        return res.json(response.data);
    }
    catch(e){
        console.log(e);
    }
}


module.exports = {
    testpost,
    checkTime,
    studentTimestamp
}