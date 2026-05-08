import router from "express";
import {
  createMenuCategory,
  getAllMenuCategories,
  getMenuCategoryById,
  updateMenuCategory,
  deleteMenuCategory,
} from "../controllers/menuCategoriesController.js";

const menuRouter = router.Router();

menuRouter.post("/", createMenuCategory);
menuRouter.get("/", getAllMenuCategories);
menuRouter.get("/:id", getMenuCategoryById);
menuRouter.put("/:id", updateMenuCategory);
menuRouter.delete("/:id", deleteMenuCategory);

export default menuRouter;
