const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "make sure name has 3 characters or more"],
    required: [true, "Name is required"],
  },
  type: {
    type: String,
    minlength: [3, "make sure the type has 3 characters or more"],
    required: [true, "Type of the pet is required"],
  },
  description: {
    type: String,
    minlength: [3, "make sure the description has 3 characters or more"],
    required: [true, " Description of the pet is required"],
  },

  mileage: {
    type: Number,
    required: [true, "Mileage is required"],
  },
  year: {
    type: Number,
    required: [true, " Year of the built is required"],
  },
  color: {
    type: String,
    required: [true, " color of the Car is required"],
  },
}, {timestamps: true});

const Car = mongoose.model("car" , CarSchema);
module.exports = Car;
