const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
});

module.exports = Animal = mongoose.model("animal", animalSchema);
