//import mongoose from "mongoose";
const mongoose = require("mongoose");


const operationSchema = mongoose.Schema({
    numOperation : {type : String, required : true},
    dateOperation : {type : String, required : true},
    montantOperation : {type : String, required : true}
});

module.exports = mongoose.model("Operation", operationSchema);