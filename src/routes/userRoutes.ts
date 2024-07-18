import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

router.get("/getAllUser", userController.getAllUser);
router.get("/getUser", userController.getUser);
router.post("/createUser", userController.createUser);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:id", userController.deleteUser);

export default router;
