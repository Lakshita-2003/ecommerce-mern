const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const created = await product.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ message: "Product creation failed" });
  }
};

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

module.exports = { createProduct, getProducts };
