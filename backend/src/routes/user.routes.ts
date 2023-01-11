import { Router } from "express";
import {
    createUser,
    getUsers,
    getSpecificUser,
    deleteUser,
    loginUser,
    updateUserMail,
    updateUserPassword,
} from "../controllers/user.controller";

const router: Router = Router();

//Routes
router.post("/signup", createUser);
router.get("/users", getUsers);
router.get("/users/:rut", getSpecificUser);
router.delete("/users/:rut", deleteUser);
router.put("/users/resetPassword/:rut", updateUserPassword);
router.put("/users/updateEmail/:rut", updateUserMail);
router.post("/login", loginUser);

export default router;
