const express = require("express");
const router = express.Router();
const ProductsController = require('../controller/products');


router.get("/", ProductsController.getAllProducts);

router.post("/", ProductsController.addNewProduct);

router.get("/:productId", ProductsController.getProductWithProductId);

router.patch("/:productId", ProductsController.updateProduct);

router.delete("/:productId", ProductsController.default.deleteProduct);

module.exports = router;