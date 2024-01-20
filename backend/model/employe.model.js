const mongoose =require("mongoose")

const employmentschema =new mongoose.Schema({

  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  department: { type: String, required: true },
  position: { type: String, required: true },

})
const employmentModel = mongoose.model("user",employmentschema)

module.exports = { employmentModel }