require("dotenv").config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require("body-parser");
const config = require("./config/config");
const axios = require("axios");
const bypassRouter = require("./routes/bypass.route");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const urlEncoded = bodyparser.urlencoded({
    extended: true,
    limit: "50mb",
});
const jsonEncoded = express.json();

app.use(cors());
app.use(morgan('dev'));
app.use(jsonEncoded);
app.use(urlEncoded);

app.get('/', (req, res) => {
    return res.json({
        status: "OK",
        message: "server alive",
    });
});
app.use("/api/bypass", bypassRouter);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(config.port, () => {
  console.log(`> Server is listening on port ${config.port}`);
});
