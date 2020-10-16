const express = require("express");

const app = express();

app.get("/abonnes", (req, res, next) => {

    let abonnes = [
        {
            _id : 1,
            nom : "Gloire",
            postnom : "Musavuli",
            age : 30,
            sexe : "M"
        },
        {
            _id : 2,
            nom : "Grace",
            postnom : "AOCI",
            age : 12,
            sexe : "M"
        }
    ]

    res.status(202).json(abonnes);
});




module.exports = app;