import { Router } from "express";

import { getRoles, createRole, getSpecificRole, deleteRole, updateRole } from '../controllers/role.controller';

const router: Router = Router();

//Routes
router.get("/roles", getRoles);
router.get("roles/:id", getSpecificRole);
router.post("/roles", createRole);
router.put("/roles/:id", updateRole);
router.delete("/roles/:id", deleteRole);

export default router;
