import { Router } from "express";
import {
    getTreatments,
    createTreatment,
    getSpecificTreatment,
    deleteTreatment,
    updateTreatment,
} from "../controllers/treatment.controller";

const router: Router = Router();

//Routes
router.get("/treatments", getTreatments);
router.get("/treatments/:nombre", getSpecificTreatment);
router.post("/treatments", createTreatment);
router.put("/treatments/:id", updateTreatment);
router.delete("/treatments/:id", deleteTreatment);

export default router;