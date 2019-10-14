const express = require('express');

const server = express();

server.get('/teste', (req, res) => {
  return res.json({message: 'Jesus é Rei'});
});

server.listen(3000);
