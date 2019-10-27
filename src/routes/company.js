import { Router } from 'express';
import db from "../../queries";

const router = Router();

router.get('/', db.getCompanies);
router.get('/:id', db.getCompanyById);

export default router;