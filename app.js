const express = require("express");
const abonnes = require("./controllers/abonnes");

const operations = require("./controllers/operations");
const statistics = require("./controllers/statistics");

const comptes = require("./controllers/comptes");
const bodyParser = require("body-parser");
// import mongoose from "mongoose";
const mongoose = require("mongoose");


const app = express();

/** Connection a la BD mongoDB */
mongoose.connect('mongodb+srv://finance243:finance243@cluster0.oxsxg.mongodb.net/backend-cotisation?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !', err));

/** Set response header to allow same parameters */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

/** Set body parser pour gerer les body envoyé par les requetes */
app.use(bodyParser.urlencoded());

app.get("/abonnes", abonnes.getAbonnes);

app.get("/abonnes/:telephone", abonnes.getAbonne);

app.post("/abonnes", abonnes.addAbonne);

// app.get("/comptes",comptes.getComptes);

// app.get("/categories", categories.categoryOperation);

app.get("/operations", operations.getOperations);

app.get("/statistics/amountDays", statistics.getCountAndAmountDays);


// app.post("/statistics/countOperationByDay", statistics.countOperationByDay);


// app.get("/statistics/getDailyCotisation", statistics.getDailyCotisation);
app.post("/statistics/getDailyCotisation", statistics.getDailyCotisation);

// app.get("/operations/:montantOperation", operations.getOperation);
// app.get("/operations", operations.getTest);

// app.post("/operations", operations.addOperation);

// app.delete("/operations/:montantOperation", operations.deleteOperation);//delete one

// app.put("/operations/:montantOperation", operations.updateOperation);




module.exports = app;