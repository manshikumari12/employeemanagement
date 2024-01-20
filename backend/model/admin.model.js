const mongoose =require("mongoose")

const adminschema =new mongoose.Schema({


  email: { type: String, required: true },
 password :{type:String ,required: true},
 position:{type:String,require:true}

})
const adminModel = mongoose.model("admin",adminschema)

module.exports = {adminModel}