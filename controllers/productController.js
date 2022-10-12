const products = require("../models/productModel");

/************************************************/

exports.product_list = async (_, res) => {
  let product = await products.find();
  res.setHeader("Content-Type", " application/json");
  res.json({ product });
};

/************************************************/

exports.createProduct = async (req, res) => {
  const { name, category, price, description, stock } = req.body;
  const createdProduct = new products({
    name,
    category,
    price,
    description,
    stock,
  });
  await createdProduct.save();
  res.status(201).json({ createdProduct });
};

/************************************************/
