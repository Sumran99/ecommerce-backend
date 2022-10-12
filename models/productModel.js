const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/************************************************/

const productSchema = new Schema({
  name: { type: String, max: 20, required: true },
  category: { type: String, max: 18, required: true },
  description: { type: String, max: 40, required: true },
  stock: { type: Number, required: true },
  price: {type: String, max: 10, required: true}
});

/************************************************/

module.exports = mongoose.model("product", productSchema);
