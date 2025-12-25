const express = require("express");
const router = express.Router();
const { createProduct, getProducts } = require("../controllers/productController");
const { protect } = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.route("/")
  .get(getProducts)
  .post(protect, admin, createProduct);

module.exports = router;
