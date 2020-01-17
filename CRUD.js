const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Diego", "email": "diego@rocketseat.com.br" }

// CRUD - Create, Read, Update, Delete

const users = ['Diego', 'Robson', 'Vitor'];

server.use((req, res, next) => {
  console.log('Request');
  console.log(`Metodo: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd('Request');
});

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'User name is required' });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];

  if (!users) {
    return res.status(400).json({ error: 'User does not exists' });
  }

  req.user = user;

  return next();
}
server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/user/:index', checkUserInArray, (req, res) => {
  return res.json(req.user);
})

server.post('/users', checkUserExists, (req, res) => {
  const { name } = req.body;

  users.push(name);
  
  return res.json(users);
});

server.put('/users/:index', checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete('/users/:index', checkUsersInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();
});

server.listen(3000); // Finalizado

// server.get - listar usuarios
// server.post - Edita 
// serv
