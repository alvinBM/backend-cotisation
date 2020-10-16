exports.categoryAbonne = (req, res, next) => {

    let abonne = [
        {
            id_cat : 1,
            nom_cat : "premium",
            type_cat:"abonne"
        }
        
    ]

    res.status(203).json(abonne);
};

exports.categoryCompte = (req, res, next) => {

    let comptes = [
        {
            id_cat : 1,
            nom_cat : "debiter",
            type_cat : "compte",
        }
    ]

    res.status(204).json(comptes);
};

exports.categoryOperation = (req, res, next) => {

    let operation = [
        {
            id_cat : 1,
            nom_cat : "depot",
            type_cat : "operation",
            
        }
    ]

    res.status(205).json(operation);
};


