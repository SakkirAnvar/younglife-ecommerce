import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, deleteProductController, getProductController, productPhotoController, singleProductController, updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//get products
router.get('/get-product', getProductController)

//single product
router.get("/get-product/:slug", singleProductController)

//get photo
router.get("/product-photo/:pid", productPhotoController)

//Delete Product
router.delete("/product/:pid", deleteProductController)

//Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

export default router