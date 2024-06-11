const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: {
    required: true,
    unique: true,
    type: String,
    lowercase: true,
    index: true,
  },
  password: {
    required: true,
    type: String,
  },
})

module.exports = mongoose.model("users", userSchema)
