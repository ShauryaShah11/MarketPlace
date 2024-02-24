import express from "express";
import { createCategory, deleteCategoryById, getAllCategories, getProductByCategoryId, updateCategoryById } from "../controllers/Category.js";
import { auth, isAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.post('/add', auth, isAdmin,createCategory);
router.put('/update/:id', auth, isAdmin, updateCategoryById);
router.delete('/delete/:id', auth, isAdmin, deleteCategoryById);
router.get('/products/:id', getProductByCategoryId);
router.get('/', getAllCategories);

export default router;
