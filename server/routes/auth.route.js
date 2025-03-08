import express from "express";
const authRouter = express.Router();
import {
  signup,
  login,
  logout,
  updateProfile,
  checkAuthentication,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.put("/update-profile", protectRoute, updateProfile);
authRouter.get("/check", protectRoute, checkAuthentication);
//exporting
export default authRouter;
