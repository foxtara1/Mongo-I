const mongoose = require("mongoose");

const schema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  createdOn: { type: Date, default: Date.now }
});

const Schema = mongoose.model("Friend", schema);

module.exports = Schema;