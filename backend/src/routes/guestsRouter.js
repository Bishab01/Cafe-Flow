import router from "express";
import {
  createGuest,
  getAllGuests,
  getGuestById,
  updateGuest,
  deleteGuest,
} from "../controllers/guestsController.js";

const guestRouter = router.Router();

guestRouter.post("/", createGuest);
guestRouter.get("/", getAllGuests);
guestRouter.get("/:id", getGuestById);
guestRouter.put("/:id", updateGuest);
guestRouter.delete("/:id", deleteGuest);

export default guestRouter;
