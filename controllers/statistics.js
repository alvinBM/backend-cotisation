
exports.userCount = (req, res, next) => {

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

    let count = abonnes.length;

    res.status(202).json(count);
};


exports.getDailyCotisation = (req, res, next) => {

    let dailyCotisation = 200;

    res.status(201).json(dailyCotisation);
};
