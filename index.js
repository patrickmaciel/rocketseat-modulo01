const express = require('express');

const server = express();

// query params = ?teste=1
// route params = /users/1
// requeste body = {"name": "Patrick", "age": 30}

server.get('/teste', (req, res) => {
  return res.json({ message: 'Jesus é Rei'});
});

server.get('/params', (req, res) => {
  const { nome } = req.query;
  return res.json({ message: `Hello ${nome}`});
});

server.get('/users/:id', (req, res) => {
  const { id } = req.params;
  return res.json({ message: `ID do usuário: ${id}`});
});

server.listen(3000);
