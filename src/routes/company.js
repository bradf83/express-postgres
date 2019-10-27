import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const companies = await req.context.models.Company.findAll();
    return res.status(200).json(companies);
});

router.get('/:id', async (req, res) => {
    //TODO: If nothing is found.
    const company = await req.context.models.Company.findByPk(req.params.id);
    return res.status(200).json(company);
});

export default router;