const express = require("express");
const abonnes = require("./controllers/abonnes");
const operations = require("./controllers/operations");
const bodyParser = require("body-parser");

const app = express();

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
app.post("/abonnes", abonnes.addAbonne);

app.get("/operations", operations.getOperations);

app.post("/operations", operations.addOperation);


module.exports = app;