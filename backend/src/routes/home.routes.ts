import { Router } from 'express';
import { generateFullReport } from '../controllers/report.controller';

const router = Router();

router.get('/', (req, res) => {
	res.send('Hello World!');
});
router.get('/pdf', generateFullReport)

export default router;
