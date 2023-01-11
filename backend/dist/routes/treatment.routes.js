"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const treatment_controller_1 = require("../controllers/treatment.controller");
const router = (0, express_1.Router)();
//Routes
router.get("/treatments", treatment_controller_1.getTreatments);
router.get("/treatments/:nombre", treatment_controller_1.getSpecificTreatment);
router.post("/treatments", treatment_controller_1.createTreatment);
router.put("/treatments/:id", treatment_controller_1.updateTreatment);
router.delete("/treatments/:id", treatment_controller_1.deleteTreatment);
exports.default = router;
