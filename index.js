const express = require('express')
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(express.static('/public'));

server.listen(5000, ()=> console.log('server listening at port: 5000'));
