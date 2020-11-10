const express = require('express');
const server = express();
const port = process.env.PORT || 4000;

server.get('/', (req, res) => {
  res.send(`Hello World on port: ${port}`);
});

server.get('/envs', (req, res) => {
  res.send(process.env);
});

server.listen(port, () => {
  console.log(`Server listening at http://hdhanbo0rbquqrycpaphd.js.wpenginepoweredstaging.com (port: ${port})`);
});