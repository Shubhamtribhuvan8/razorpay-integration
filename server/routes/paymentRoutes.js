import express  from "express";
import  {checkout
,Paymentverification}  from "../controllers/paymentController.js";
const router=express.Router();
router.route("/checkout").post(checkout);
router.route("/paymentverification").post(Paymentverification);
export default router;

