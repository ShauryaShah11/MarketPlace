import  express from "express"
import { updateDisplayPicture,updateUserDetail,getAllCustomerWithProducts } from "../controllers/User.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

//user's image update/upload
router.put("/updateDisplayPicture", auth, updateDisplayPicture)

//user's name,address update
router.put("/updateUserDetail", auth, updateUserDetail )
router.get("/getAllCustomer",getAllCustomerWithProducts);

export default router;  