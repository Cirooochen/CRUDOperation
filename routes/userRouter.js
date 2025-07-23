import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const userRouter = Router();

//option one
// userRouter.post("/", createUser);
// userRouter.get("/", getUsers);
// userRouter.get("/:id", getUserById);
// userRouter.put("/:id", updateUser);
// userRouter.delete("/:id", deleteUser);

//option two
userRouter.route("/").post(createUser).get(getUsers);
userRouter.route("/:id").put(updateUser).delete(deleteUser);

export default userRouter;
