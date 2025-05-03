const mongoose = require("mongoose");
const ProSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:String,
    defaultImage:String,
    image:[String]

})

module.exports = mongoose.model("products", ProSchema);