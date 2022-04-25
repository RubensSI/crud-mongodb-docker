const express = require("express");
const mongoose = require("mongoose");

require('./models/Metas');
const Meta = mongoose.model('Meta');

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://db:27017/crud-node-mongo-docker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com BD MongoDB realizada com sucesso");
  })
  .catch((err) => {
    console.log(
      `Erro: Conexão com BD MongoDB não realizada com sucesso ${err}`
    );
  });

app.get("/metas", async (req, res) => {
  return res.json({ description: "Aprender a desenvolver apis em node" });
});

app.post("/metas", async (req, res) => {
  await 
  return res.json({
    error: false,
    metas: req.body
  });
});

app.listen(PORT, HOST, () => console.log(`Server ativo na porta ${PORT}`));
