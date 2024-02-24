import  express from "express"
import { createCategory, getAllCategories } from "../controllers/Category";
const router = express.Router();
// Route for creating an item
router.get("/getAllCategories",  getAllCategories);
router.post("/createCategory", auth, createCategory);

export default router;  