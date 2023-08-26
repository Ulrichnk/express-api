const express = require("express");
const jsonServer = require("json-server");

const app = express();
const port = process.env.PORT || 3000;

// Utiliser JSON Server pour les routes API
const jsonRouter = jsonServer.router("db.json"); // Remplacez 'db.json' par votre fichier de données
const middlewares = jsonServer.defaults();

app.use("/api", jsonRouter); // Toutes les routes de l'API commencent par '/api'
app.use(middlewares);

// Démarrer le serveur Express
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
