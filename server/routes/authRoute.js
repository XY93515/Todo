import express from "express";
import {
  registerController,
  loginController,
} from "../controller/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";


const router = express.Router();

router.post("/register", registerController);



router.post("/login", requireSignIn, loginController);


export default router;