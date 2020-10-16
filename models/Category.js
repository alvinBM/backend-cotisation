// import mongoose from "mongoose";
const mongoose = require("mongoose");


const categorySchema = mongoose.Schema({
    nom_cat : {type : String, required : true},
    type_cat : {type : String, required : true}  
});

module.exports = mongoose.model("Category", categorySchema);