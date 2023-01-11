"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
//Routes
router.post("/signup", user_controller_1.createUser);
router.get("/users", user_controller_1.getUsers);
router.get("/users/:rut", user_controller_1.getSpecificUser);
router.delete("/users/:rut", user_controller_1.deleteUser);
router.put("/users/resetPassword/:rut", user_controller_1.updateUserPassword);
router.put("/users/updateEmail/:rut", user_controller_1.updateUserMail);
router.post("/login", user_controller_1.loginUser);
exports.default = router;
