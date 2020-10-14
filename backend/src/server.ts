import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

const port = 3333;

app.get('/users', (request, response) => {
  console.log('Hello world!');
  return response.json({ message: 'Hello world'});
});
app.listen(port);

console.log("Listening on http://localhost:" + port);
