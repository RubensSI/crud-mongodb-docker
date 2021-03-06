const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('./models/Metas')
const Meta = mongoose.model('Meta')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'X-PINGOTHER, Content-Type, Authorization'
  )
  app.use(cors())
  next()
})

mongoose
  .connect('mongodb://db:27017/crud-node-mongo-docker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Conexão com BD MongoDB realizada com sucesso')
  })
  .catch(err => {
    console.log(`Erro: Conexão com BD MongoDB não realizada com sucesso ${err}`)
  })

app.get('/metas', async (req, res) => {
  return res.json({ description: 'Aprender a desenvolver apis em node' })
})

app.post('/metas', async (req, res) => {
  await sleep(3000)

  function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }

  await Meta.create(req.body, err => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Erro: Meta não cadastrada com sucesso!'
      })
  })

  return res.json({
    error: false,
    metas: req.body
  })
})

app.listen(PORT, HOST, () => console.log(`Server ativo na porta ${PORT}`))
