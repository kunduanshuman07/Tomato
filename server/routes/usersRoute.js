import express from "express";
const router=express.Router();
import { registerUser,loginUser,addToCart, getFoodData } from "../controllers/userController.js";

router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/addtocart',addToCart);
router.get('/getfooddata/:userid',getFoodData);
export default router;