const express = require('express');

const server = express();

server.get('/user/:id', (req, res) => {
const id = req.params.id;

})