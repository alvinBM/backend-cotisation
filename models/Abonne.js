import mongoose from "mongoose";

const abonneSchema = mongoose.Schema({
    nom : {type : String, required : true},
    postnom : {type : String, required : true},
    age : {type : String, required : true},
    sexe : {type : String, required : true},
    telephone : {type : String, required : true}
});

module.exports = mongoose.model("Abonne", abonneSchema);