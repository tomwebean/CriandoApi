const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Diego", "email": "diego@rocketseat.com.br" }

// CRUD - Create, Read, Update, Delete

const users = ['Diego', 'Robson', 'Vitor'];

server.user((req, res, next) => {
  console.log('Request');
  console.log(`Metodo: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd('Request');
});