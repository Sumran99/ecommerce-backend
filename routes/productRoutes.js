const express = require("express");
const product = require("../controllers/productController");
const router = express.Router();

/************************************************/

router.get("/", product.product_list);
router.post("/create", product.createProduct);

/************************************************/

module.exports = router;
