const express = require('express');

const PORT = 3000
const HOST = '0.0.0.0'

const app = express();

app.get('/', (req, res) => {
  res.json({ massage : 'Hello, world!' });
})

app.listen(PORT, HOST, () => console.log(`Server ativo na porta ${PORT}`))
