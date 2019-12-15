const express = require('express');

const server = express();

server.get('/user/:id', (req, res) => {
const id = req.params.id;

return res.jason({ message: `Buscando o usuário ${id}` });

})

server.listen(3000);