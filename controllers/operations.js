exports.getOperations = (req, res, next) => {

    let operations = [
        {
            _numOperation : 1,
            dateOperation : "16/10/2020",
            montantOperation : 2000
        },
        {
            _numOperation : 2,
            dateOperation : "20/10/2020",
            montantOperation : 2500
        }
    ]

    res.status(202).json(operations);
};


exports.addOperation = (req, res, next) => {

    console.log("Requete de l'utilisateur, ",req.body)

    let response = {
        status : 201,
        message : "Operation ajouté avec succès"
    }

    res.status(201).json(response);
};