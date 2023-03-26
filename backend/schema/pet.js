const mongoose = require("mongoose");
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
    require: true,
  },
  prescription: {
    type: String,
  },
  lastVaccination: {
    type: String,
    default: "27-02-2023",
  },
  parentId: {
    type: String,
    ref: "petParent",
  },
});

const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet;
