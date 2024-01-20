const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://manshisbp:manshi@cluster0.svaqjcn.mongodb.net/emp?retryWrites=true&w=majority")

module.exports = {connection}