import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const owners = await req.context.db.Owner.findAll();
    return res.status(200).json(owners);
});

router.get('/:id', async (req, res) => {
    //TODO: If nothing is found.
    const owner = await req.context.db.Owner.findByPk(req.params.id);
    return res.status(200).json(owner);
});

export default router;