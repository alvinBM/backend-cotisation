const Abonne = require("../models/Abonne");
const Operation = require("../models/Operation");

const abonnes = require("../controllers/abonnes");
const comptes = require("../controllers/comptes");
const operations = require("../controllers/operations");
const categories = require("../controllers/categories");


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

    let response = {
        status: null,
        message: "",
        data: null
    }

    Operation.find()
        .then(operations => {
            let datas = operations;
            // console.log(" data = ", data);
            // console.log("ben", data)
            let date = req.body.date;
            console.log("date = ", date)
            let ops = datas
                .filter(x => (x.dateOperation == date))
                .reduce((acc, curr) => {
                    let item = acc.find(x => x.version == curr["dateOperation"]);
                    if (!item) {
                        item = { date: curr["dateOperation"], numOperation: {} }
                        acc.push(item);
                    }
                    item.numOperation[curr.numOperation] = (item.numOperation[curr.numOperation] || 0) + curr.montantOperation
                    return acc;
                }, [])
                .map(x => ({
                    "Date": x.date,
                    "Count": Object.keys(x.numOperation).length,
                    "Amount": Object.values(x.numOperation).reduce((a, b) => a + b, 0)
                }))
            response.message = "Montant par date";
            response.status = 200;
            response.data = ops;
            res.status(200).json(response);
        }).catch(error => {
            response.message = "Une erreur est survenue"
            response.status = 400,
                response.data = error
            res.status(400).json(response);
        })




};



exports.getCountAndAmountDays = (req, res, next) => {


    let response = {
        status: null,
        message: "",
        data: null
    }


    let data = [];

    Operation.find()
        .then(operations => {
            data = operations;
            console.log(" data = ", data);

            let result = [];
            data.reduce(function (res, value) {
                if (!res[value.dateOperation]) {
                    res[value.dateOperation] = { dateOperation: value.dateOperation, montantOperation: 0 };
                    result.push(res[value.dateOperation])
                }
                res[value.dateOperation].montantOperation += value.montantOperation;
                return res;
            }, {});

            console.log(result)

            response.message = "Montant par date";
            response.status = 200;
            response.data = result;
            res.status(200).json(response);
        }).catch(error => {
            response.message = "Une erreur est survenue lors de la creation de l'operation"
            response.status = 400,
                response.data = error
            res.status(400).json(response);
        })


    // var pilots = [
    //     {
    //         id: 10,
    //         name: "Poe Dameron",
    //         years: 14,
    //     },
    //     {
    //         id: 2,
    //         name: "Temmin 'Snap' Wexley",
    //         years: 30,
    //     },
    //     {
    //         id: 41,
    //         name: "Tallissan Lintra",
    //         years: 16,
    //     },
    //     {
    //         id: 99,
    //         name: "Ello Asty",
    //         years: 22,
    //     }
    // ];

    // var totalYears = pilots.reduce(function (accumulator, pilot) {
    //     return accumulator + pilot.years;
    // }, 0);

    // var mostExpPilot = pilots.reduce(function (oldest, pilot) {
    //     return (oldest.years || 0) > pilot.years ? oldest : pilot;
    // }, {});

    // console.log('mostExpPilot = ', mostExpPilot);

    // console.log('totalYears = ', totalYears);

    // var array = [
    //     { Id: "001", qty: 1 },
    //     { Id: "002", qty: 2 },
    //     { Id: "001", qty: 2 },
    //     { Id: "003", qty: 4 }
    // ];

    // var result = [];
    // array.reduce(function (res, value) {
    //     if (!res[value.Id]) {
    //         res[value.Id] = { Id: value.Id, qty: 0 };
    //         result.push(res[value.Id])
    //     }
    //     res[value.Id].qty += value.qty;
    //     return res;
    // }, {});

    // console.log(result)

    // res.status(201).json(count);
};


exports.countOperationByDay = (req, res, next) => {

    let response = {
        status: null,
        message: "",
        data: null
    }


    let data = [];

    Operation.find()
        .then(operations => {
            data = operations;
            console.log(" data = ", data);

            let result = [];
            data.reduce(function (res, value) {
                if (!res[value.dateOperation]) {
                    res[value.dateOperation] = { dateOperation: value.dateOperation, montantOperation: 0 };
                    result.push(res[value.dateOperation])
                }
                res[value.dateOperation].montantOperation += value.montantOperation;
                return res;
            }, {});

            console.log(result)

            response.message = "Montant par date";
            response.status = 200;
            response.data = result;
            res.status(200).json(response);
        }).catch(error => {
            response.message = "Une erreur est survenue lors de la creation de l'operation"
            response.status = 400,
                response.data = error
            res.status(400).json(response);
        })


    // var pilots = [
    //     {
    //         id: 10,
    //         name: "Poe Dameron",
    //         years: 14,
    //     },
    //     {
    //         id: 2,
    //         name: "Temmin 'Snap' Wexley",
    //         years: 30,
    //     },
    //     {
    //         id: 41,
    //         name: "Tallissan Lintra",
    //         years: 16,
    //     },
    //     {
    //         id: 99,
    //         name: "Ello Asty",
    //         years: 22,
    //     }
    // ];

    // var totalYears = pilots.reduce(function (accumulator, pilot) {
    //     return accumulator + pilot.years;
    // }, 0);

    // var mostExpPilot = pilots.reduce(function (oldest, pilot) {
    //     return (oldest.years || 0) > pilot.years ? oldest : pilot;
    // }, {});

    // console.log('mostExpPilot = ', mostExpPilot);

    // console.log('totalYears = ', totalYears);

    // var array = [
    //     { Id: "001", qty: 1 },
    //     { Id: "002", qty: 2 },
    //     { Id: "001", qty: 2 },
    //     { Id: "003", qty: 4 }
    // ];

    // var result = [];
    // array.reduce(function (res, value) {
    //     if (!res[value.Id]) {
    //         res[value.Id] = { Id: value.Id, qty: 0 };
    //         result.push(res[value.Id])
    //     }
    //     res[value.Id].qty += value.qty;
    //     return res;
    // }, {});

    // console.log(result)

    // res.status(201).json(count);
};
