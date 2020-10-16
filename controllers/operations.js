const Operation = require("../models/Operation");
//const Abonne = require("../models/Operation");


exports.getOperations = (req, res, next) => {

    let response = {
        status: null,
        message: "",
        data: null
    }

    Operation.find()
        .then(operations => {
            response.message = "Liste des opérations"
            response.status = 200,
                response.data = operations
            res.status(200).json(response);
        }).catch(error => {
            response.message = "Une erreur est survenue lors de la creation de l'operation"
            response.status = 400,
                response.data = error
            res.status(400).json(response);
        })

};


exports.addOperation = (req, res, next) => {

    console.log("Requete de l'utilisateur, ", req.body)

    let operation = new Operation({
        ...req.body
    })

    let response = {
        status: null,
        message: "",
        data: null
    }

    operation.save()
        .then(() => {
            response.message = "L'operation a été créé avec succès"
            response.status = 201
            response.data = operation
            res.status(201).json(response);
        })
        .catch(error => {
            response.message = "Une erreur est survenue lors de la creation de l'operation"
            response.status = 400
            response.data = error
            res.status(400).json(response);
        });
};


exports.getOperation = (req, res, next) => {

    let response = {
        status: null,
        message: "",
        data: null
    }

    Operation.findOne({ montantOperation: req.params.montantOperation })
        .then(operation => {
            response.message = "Operation trouvé"
            response.status = 200
            response.data = operation
            res.status(200).json(response);
        }).catch(error => {
            response.message = "Une erreur est survenue lors de la recherche de l'operation"
            response.status = 400
            response.data = error
            res.status(400).json(response);
        })

};

exports.deleteOperation = (req, res, next) => {

    let response = {
        status: null,
        message: "",
        data: null
    }

    Operation.remove({ montantOperation: req.params.montantOperation })
        .then(operation => {
            response.message = "Operation supprimée"
            response.status = 200
            response.data = operation
            res.status(200).json(response);
        }).catch(error => {
            response.message = "Une erreur est survenue lors de la suppressinion de l'operation"
            response.status = 400
            response.data = error
            res.status(400).json(response);
        })

};

exports.updateOperation = (req, res, next) => {

    console.log("Requete de l'utilisateur à jour, ", req.body)

    // let operation = new Operation({
    //     ...req.body
    // })

    let response = {
        status: null,
        message: "",
        data: null
    }

    Operation.findOneAndUpdate({montantOperation:req.params.montantOperation}, req.body, function (err, operation) {
        res.send(operation);
      });
};




