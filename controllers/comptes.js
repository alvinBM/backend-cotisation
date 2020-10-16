exports.getComptes = (req, res, next) => {

    let comptes = [
        {
            id : 1,
            montant : 1000,
            date : "mardi 10/02/2020",
            
        },
        {
            id : 2,
            montant : 1000,
            date : "Mercredi 10/02/2020",
        }
    ]

    res.status(202).json(comptes);
};


exports.addCompte = (req, res, next) => {

    console.log("Requete de l'utilisateur, ",req.body)

    let response = {
        status : 201,
        message : "Abonné ajouté avec succès"
    }

    res.status(201).json(response);
};