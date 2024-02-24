import express from "express";
import { addProduct, getProductById, getProducts, removeProduct, updateProduct } from "../controllers/Product.js";
import { auth } from "../middlewares/auth.js";
import { upload } from '../middlewares/multer.js';
import { uploadFiles } from "../middlewares/upload.js";

const router = express.Router();
// Route for creating an item
router.post('/add', auth, upload.array('file'), uploadFiles, addProduct);
router.put('/update/:id', auth, upload.array('file'), uploadFiles, updateProduct);
router.delete('/delete/:id', auth, removeProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);

export default router;  