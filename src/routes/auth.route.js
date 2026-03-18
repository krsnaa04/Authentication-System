import { Router } from "express";
import * as authController from "../controllers/auth.controller.js"

const authRouter = Router()

authRouter.post("/register",authController.register)

authRouter.post("/login",authController.login)

authRouter.get("/get-me",authController.getMe)

authRouter.get("/refresh-token",authController.refreshToken)

authRouter.get("/logout",authController.logout)

authRouter.get("/logout-all",authController.logoutAll)

authRouter.get("/verify-email", authController.verifyEmail)

authRouter.get("/", (req, res) => {
  res.send("Authentication System API is running 🚀");
});



export default authRouter 
