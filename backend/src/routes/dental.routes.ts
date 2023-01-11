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
} from "../controllers/dental.controller";
import { getTreatments } from "../controllers/treatment.controller";

const router = Router();

router.get("/dental", getDentals);
router.get("/dental/:id", getSpecificDental);
router.post("/dental", createDental);
router.put("/dental/:id", updateDental);
router.delete("/dental/:id", deleteDental);

router.get("/dental/report/:rut", getDentalByUser);// Atencion Dental reporte completo por paciente
router.get("/dental/report/treatments/:rut", getTreatmentsByUser); //Tratamientos por usuario
router.get("/dental/report/history/:rut", getHistoryByUser);//Historial de citas por usuario
router.get("/dental/report/summary/:id", getSummaryTreatmentById);//Reporte de cantidad de tratamientos por id


export default router;
