const Abonne = require("../models/Abonne");
const Operation = require("../models/Operation");



exports.userCount = (req, res, next) => {

    console.log("object");
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
};


exports.getDailyCotisation = (req, res, next) => {

    let dailyCotisation = 200;

    res.status(201).json(dailyCotisation);
};

exports.countOperationByDay = (req, res, next) => {
    let count = 0;

    let response = {
        status: null,
        message: "",
        data: null
    }

    Operation.find({ dateOperation: req.body.dateOperation }).exec(function (err, results) {
       count = results.length
    }).then(count => {
        response.message = "Nombre d'operations"
        response.status = 200,
            response.data = count
        res.status(200).json(response);
    }).catch(error => {
        response.message = "Une erreur est survenue"
        response.status = 400,
            response.data = error
        res.status(400).json(response);
    });

    // Operation.count()
    //     .then(count => {
    //         response.message = "Nombre d'abonnes"
    //         response.status = 200,
    //             response.data = count
    //         res.status(200).json(response);
    //     }).catch(error => {
    //         response.message = "Une erreur est survenue"
    //         response.status = 400,
    //             response.data = error
    //         res.status(400).json(response);
    //     });

    // let dailyCotisation = 200;

    res.status(201).json(count);
};
