import express from "express";
import {addRestro,addItems,getallFood, allRestros, getFoodByRestro} from "../controllers/restroController.js"
const router=express.Router();

router.post('/restrolisting',addRestro);
router.post('/additem/:restroid',addItems);
router.get('/allfoods',getallFood);
router.get('/allrestros',allRestros);
router.get('/getFoodByRestro/:restroid',getFoodByRestro);
export default router;