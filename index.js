
const express = require('express');
const cors = require('cors');
const initPuppeteerResults = require('./initPuppeteerResults');

const app = express();

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        ok: true,
        msg: 'very good'
    });
});


const server = app.listen(process.env.PORT || 9000, () => {
    console.log('server ready');
});


const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {

    socket.on('requestItemResults', (data) => {
        initPuppeteerResults(io, socket.id, data);
    });

});
