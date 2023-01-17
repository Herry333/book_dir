const express = require('express');
const port = 3000;
const books = require('./books');

const app = express();

app.use(express.json());
app.use('/api/books', books);

app.get('/', (req, res) => {
  res.send('Wlc to book directory ')
})

app.listen(port, () => {
  console.log(`Server listening  http://localhost:${port}`);
});
