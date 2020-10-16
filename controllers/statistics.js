const Abonne = require("../models/Abonne");



exports.userCount = (req, res, next) => {

    let response = {
        status: null,
        message: "",
        data: null
    }


    Abonne.count()
        .then(count => {
            response.message = "Nombre d'abonnes"
            response.status = 200,
                response.data = count
            res.status(200).json(response);
        }).catch(error => {
            response.message = "Une erreur est survenue"
            response.status = 400,
                response.data = error
            res.status(400).json(response);
        });
    // let abonnes = [
    //     {
    //         _id : 1,
    //         nom : "Gloire",
    //         postnom : "Musavuli",
    //         age : 30,
    //         sexe : "M"
    //     },
    //     {
    //         _id : 2,
    //         nom : "Grace",
    //         postnom : "AOCI",
    //         age : 12,
    //         sexe : "M"
    //     }
    // ]

    // let count = abonnes.length;

    // res.status(202).json(count);
};


exports.getDailyCotisation = (req, res, next) => {

    let dailyCotisation = 200;

    res.status(201).json(dailyCotisation);
};
