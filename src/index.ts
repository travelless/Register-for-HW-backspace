import express from 'express';
import cors from 'cors';
import dbClient from './DBoprate';

const db = new dbClient();
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  console.log('3000');
  res.send('Hello world');
});

app.post('/register', (req, res) => {
  db.createUser(req.query).then((result) => {
    console.log(result);
    res.send(result);
  }
  );
});
 
app.use(cors);

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});