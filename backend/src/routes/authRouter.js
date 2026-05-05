import router from "express";
import { login, logout, register } from "../controllers/authController.js";

const authRouter = router.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;
