import { Router } from "express";
// import authRouter from "./authRoute.js";
import rolesRouter from "./rolesRoute.js";

const router = Router();

// router.use("/auth", authRouter);
router.use("/roles", rolesRouter);

export default router;
