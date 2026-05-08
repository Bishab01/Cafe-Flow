import router from "express";
import {
  createFoodOrder,
  getAllFoodOrders,
  getFoodOrderById,
  updateFoodOrderStatus,
  addItemsToOrder,
  removeItemFromOrder,
  deleteFoodOrder,
} from "../controllers/foodOrderController.js";

const foodOrdersRouter = router.Router();

foodOrdersRouter.post("/", createFoodOrder);
foodOrdersRouter.get("/", getAllFoodOrders);
foodOrdersRouter.get("/:id", getFoodOrderById);
foodOrdersRouter.put("/:id/status", updateFoodOrderStatus);
foodOrdersRouter.post("/:id/items", addItemsToOrder);
foodOrdersRouter.delete("/:id/items/:itemId", removeItemFromOrder);
foodOrdersRouter.delete("/:id", deleteFoodOrder);

export default foodOrdersRouter;
