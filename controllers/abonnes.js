
exports.getAbonnes = (req, res, next) => {

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
};


exports.addAbonne = (req, res, next) => {

    console.log("Requete de l'utilisateur, ",req.body)

    let response = {
        status : 201,
        message : "Abonné ajouté avec succès"
    }

    res.status(201).json(response);
};