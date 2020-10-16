const Abonne = require("../models/Abonne");


exports.getAbonnes = (req, res, next) => {

    let response = {
        status: null,
        message: "",
        data: null
    }

    Abonne.find()
        .then(abonnes => {
            response.message = "Liste des abonnés"
            response.status = 200,
                response.data = abonnes
            res.status(200).json(response);
        }).catch(error => {
            response.message = "Une erreur est survenue lors de la creation de l'abonne"
            response.status = 400,
                response.data = error
            res.status(400).json(response);
        })

};


exports.addAbonne = (req, res, next) => {

    console.log("Requete de l'utilisateur, ", req.body)

    let abonne = new Abonne({
        ...req.body
    })

    let response = {
        status: null,
        message: "",
        data: null
    }

    abonne.save()
        .then(() => {
            response.message = "L'abonné a été créé avec succès"
            response.status = 201
            response.data = abonne
            res.status(201).json(response);
        })
        .catch(error => {
            response.message = "Une erreur est survenue lors de la creation de l'abonne"
            response.status = 400
            response.data = error
            res.status(400).json(response);
        });
};


exports.getAbonne = (req, res, next) => {

    let response = {
        status: null,
        message: "",
        data: null
    }

    Abonne.findOne({ telephone: req.params.telephone })
        .then(abonne => {
            response.message = "Abonne trouvé"
            response.status = 200
            response.data = abonne
            res.status(200).json(response);
        }).catch(error => {
            response.message = "Une erreur est survenue lors de la creation de l'abonne"
            response.status = 400
            response.data = error
            res.status(400).json(response);
        })

};