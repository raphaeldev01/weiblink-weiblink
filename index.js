// server.js
const express = require("express");
const path = require("path");
const cors = require("cors")
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());  // Para JSON
app.use(cors())

// Communications 
// // Caminho para a pasta build do React
const buildPath = path.join(__dirname, "build");

// // Servir arquivos estáticos (JS, CSS, imagens, etc.)
app.use(express.static(buildPath));

//Routes
const FormRouter = require("./routers/form")
app.use("/api/form", FormRouter);

// // Rota catch-all para retornar o index.html do React
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
});
  
app.listen(PORT, () => {
  console.log(`🚀 Servidor WEIBLINK rodando na ${PORT}`);
});
