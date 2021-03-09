const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Olá' });
})

app.listen(3003, () => console.log('🔥 Server started at http://localhost:3003/'));
