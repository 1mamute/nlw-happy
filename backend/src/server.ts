import express from 'express';
import path from 'path';

import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

const port = 3333;

app.listen(port);

console.log('Listening on http://localhost:' + port);
