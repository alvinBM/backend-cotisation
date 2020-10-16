const Category = require("../models/Category");

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

exports.addCategory = (req, res, next) => {

    console.log("Requete de l'utilisateur, ", req.body)

    let category = new Category({
        ...req.body
    })

    let response = {
        status: null,
        message: "",
        data: null
    }

    category.save()
        .then(() => {
            response.message = "La categorie a été créée avec succès"
            response.status = 201
            response.data = category
            res.status(201).json(response);
        })
        .catch(error => {
            response.message = "Une erreur est survenue lors de la creation de la categorie"
            response.status = 400
            response.data = error
            res.status(400).json(response);
        });
};

exports.getCatogories = (req, res, next) => {

    let response = {
        status: null,
        message: "",
        data: null
    }

    Category.find()
        .then(categories => {
            response.message = "Liste des abonnés"
            response.status = 200,
                response.data = categories
            res.status(200).json(response);
        }).catch(error => {
            response.message = "Erreur de lecture"
            response.status = 400,
                response.data = error
            res.status(400).json(response);
        })
};

exports.deleteCategories = (req, res) => {
    Category.remove({nom_cat : req.params.nom_cat})
      .then((category) => {
        if (!category) {
          return res.status(404).send({
            message: "category not found ",
          });
        }
        res.send({ message: "Category deleted successfully!" });
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Could not delete category ",
        });
      });
  };


  exports.updateCategory = (req, res) => {
    if (!req.body.nom_cat || !req.body.type_cat) {
      res.status(400).send({
        message: "required fields cannot be empty",
      });
    }

    Category.findOneAndUpdate({nom_cat:req.params.nom_cat}, req.body, function (err, category) {
        res.send(category);
      });


    // Category.findOneAndUpdate({nom_cat:req.params.nom_cat}, req.body)
    // .then((category) => {
    //     if (!category) {
    //       return res.status(404).send({
    //         message: "no category found",
    //       });
    //     }
    //     res.status(200).send(user);
    //   })
    //   .catch((err) => {
    //     return res.status(404).send({
    //       message: "error while updating the post",
    //     });
    //   });

    // Category.findByIdAndUpdate(req.params.nom_cat, req.body, { new: true })
    //   .then((category) => {
    //     if (!category) {
    //       return res.status(404).send({
    //         message: "no category found",
    //       });
    //     }
    //     res.status(200).send(user);
    //   })
    //   .catch((err) => {
    //     return res.status(404).send({
    //       message: "error while updating the post",
    //     });
    //   });
  };

  exports.findByNomCat = (req, res) => {
    Category.findOne({nom_cat : req.params.nom_cat})
      .then((category) => {
        if (!category) {
          return res.status(404).send({
            message: "User not found with nom_cat " + req.params.category,
          });
        }
        res.status(200).send(category);
        console.log(category);
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Error retrieving user with id " + req.params.nom_cat,
        });
      });
  };



