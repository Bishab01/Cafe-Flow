import router from "express";
import {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} from "../controllers/roomsController.js";

const roomRouter = router.Router();

roomRouter.post("/", createRoom);
roomRouter.get("/", getAllRooms);
roomRouter.get("/:id", getRoomById);
roomRouter.put("/:id", updateRoom);
roomRouter.delete("/:id", deleteRoom);

export default roomRouter;
