import { login, register, getAllUsers } from "../controller/userController.js";
import { Router } from "express";
const router = Router();
/* GET users listing. */
router.get("/", getAllUsers);

router.post("/login", login);
router.post("/register", register);

export default router;
