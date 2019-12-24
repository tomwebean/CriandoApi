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

function checkUserExists(req, res, next) {
  if (!req,body.name) {
    return res.status(400).json({ error: 'User name is required' });
  }

  return next();
}

function checkUserExists(req, res, next) {
  const user = users[req.params.indes];

  if (!users) {
    return res.status(400).json({ error: 'User does not exists '});
  }

  req.user = user;

  return next();
}
server.get('/users', (req, res, next) => {
  return res.json(users);
})

<<<<<<< HEAD
server.get('/user/:index', checkUserInArray, (req, res) => {
  return res.json(req.user);
})

