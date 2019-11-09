import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    let companies = [];
    // Very simple implementation of filter for now. Could be multiple, this only works for single.
    if(req.query.filter){
        companies = await req.context.db.Company.scope(req.query.filter).findAll({include: [{model: req.context.db.Owner}]});
    } else {
        companies = await req.context.db.Company.findAll({include: [{model: req.context.db.Owner}]});
    }
    return res.status(200).json(companies);
});

router.get('/:id', async (req, res) => {
    //TODO: If nothing is found.
    const company = await req.context.db.Company.findByPk(req.params.id);
    return res.status(200).json(company);
});

export default router;