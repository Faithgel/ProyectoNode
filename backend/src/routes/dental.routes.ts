import { Router } from "express";
import {
    createDental,
    deleteDental,
    getDentalByUser,
    getDentals,
    getHistoryByUser,
    getSpecificDental,
    getTreatmentsByUser,
    updateDental,
    getSummaryTreatmentById,
    getSummaryTreatment,
    getHistory,
    getTreatments,
} from "../controllers/dental.controller";

const router = Router();

router.get("/dental", getDentals);
router.get("/dental/:id", getSpecificDental);
router.post("/dental", createDental);
router.put("/dental/:id", updateDental);
router.delete("/dental/:id", deleteDental);

router.get("/dental/report/:rut", getDentalByUser);
router.get("/dental/report/treatments/:rut", getTreatmentsByUser);
router.get("/dental/report/treatments/", getTreatments);
router.get("/dental/report/history/:rut", getHistoryByUser);
router.get("/dental/report/history/", getHistory);
router.get("/dental/report/summary/:id", getSummaryTreatmentById);
router.get("/dental/report/summary/", getSummaryTreatment);

export default router;
