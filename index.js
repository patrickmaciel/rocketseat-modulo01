const express = require('express');

const server = express();
server.use(express.json());

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

// CRUD - create, read, update, delete
const users = ['Diego', 'Patrick', 'Victor'];

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  return res.json({ user: users[index]});
});

server.post('/users', (req, res) => {
  const { name } = req.body;
  users.push(name);

  return res.json(users);
});

server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;
  return res.json(users);
});

server.delete('/users/:index', (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);

  return res.send();
})

server.listen(3000);