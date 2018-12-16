const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  nickname: String,
  gender: String,
  phone: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("contact", contactSchema);
