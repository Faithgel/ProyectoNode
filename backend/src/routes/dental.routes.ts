import { Router } from 'express';
import { createDental, deleteDental, getDentals, getSpecificDental, getTreatmentsByUser, updateDental } from '../controllers/dental.controller';

const router = Router();

router.get('/dental', getDentals);
router.get('/dental/:id', getSpecificDental);
router.post('/dental', createDental);
router.put('/dental/:id', updateDental);
router.delete('/dental/:id', deleteDental);
router.get('/dental/report/:rut', getTreatmentsByUser);

export default router;