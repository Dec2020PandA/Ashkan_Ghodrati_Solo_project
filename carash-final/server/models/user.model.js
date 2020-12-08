const mongoose = require("mongoose");
const { carSchema } = require("./car.model");
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    hasCars: [carSchema],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;