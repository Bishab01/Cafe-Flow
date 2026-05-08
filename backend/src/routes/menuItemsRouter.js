import router from "express";
import {
  createMenuItem,
  getAllMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
} from "../controllers/menuItemsController.js";

const menuItemRouter = router.Router();

menuItemRouter.post("/", createMenuItem);
menuItemRouter.get("/", getAllMenuItems);
menuItemRouter.get("/:id", getMenuItemById);
menuItemRouter.put("/:id", updateMenuItem);
menuItemRouter.delete("/:id", deleteMenuItem);

export default menuItemRouter;
