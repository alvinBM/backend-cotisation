const Operation = require("../models/Operation");
//const Abonne = require("../models/Operation");
var data=[];


exports.getOperations = (req, res, next) => {

    let response = {
        status: null,
        message: "",
        data: null
    }

    Operation.find()
        .then(operations => {
            data=operations;
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

var categories = [];


exports.getTest = (req, res, next) => {
    var promises = [];
    var names = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
    var resolveCount = 0;
    for (var i = 0; i < names.length; i++) {
        // Store the name in variable so that can be persistent and not
        // affected by the changing 'i' value
        const name = names[i]
        promises.push(new Promise((resolve, reject) => {
        
          // Your DB calls here. We shall use a simple timer to mimic the
          // effect
          setTimeout(() => {
            categories.push(name)
            resolveCount++;
            resolve();
          }, 1000)
        }));
    }
    
    
    Promise.all(promises).then(function() {
      console.log("This should run ONCE before AFTER promise resolved")
      console.log("resolveCount: " + resolveCount)
      console.log(categories);
      
      // Do your logic with the updated array
      res.json(categories);
    });
    console.log("This will run immediately, before any promise resolve")
    console.log("resolveCount: " + resolveCount)
    console.log(categories)
};


console.log("@@@@", categories);


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




