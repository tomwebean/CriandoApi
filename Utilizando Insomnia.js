const express = require('express');

const server = express();

const users = ['Diego', 'Cláudio', 'Vitor'];

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
})

server.listen(3000);

// Finalizado
