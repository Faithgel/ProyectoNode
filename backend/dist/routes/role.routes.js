"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_controller_1 = require("../controllers/role.controller");
const router = (0, express_1.Router)();
//Routes
router.get("/roles", role_controller_1.getRoles);
router.get("roles/:id", role_controller_1.getSpecificRole);
router.post("/roles", role_controller_1.createRole);
router.put("/roles/:id", role_controller_1.updateRole);
router.delete("/roles/:id", role_controller_1.deleteRole);
exports.default = router;
