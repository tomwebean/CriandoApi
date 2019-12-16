const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /users/1