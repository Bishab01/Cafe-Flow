import router from "express";
import {
  createTable,
  getAllTables,
  getTableById,
  updateTable,
  deleteTable,
} from "../controllers/tablesController.js";

const tableRouter = router.Router();

tableRouter.post("/", createTable);
tableRouter.get("/", getAllTables);
tableRouter.get("/:id", getTableById);
tableRouter.put("/:id", updateTable);
tableRouter.delete("/:id", deleteTable);

export default tableRouter;
