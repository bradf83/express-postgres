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

router.post('/', async (req, res) => {
    req.context.db.Owner.create(req.body).then(() => {
        // Return created object?  Message?
        res.status(201).json();
    }, () => {
        // Validation errors?
        res.status(400).json({error: {message: 'An error occurred.'}})
    });
});

router.delete('/:id', async (req, res) => {
    req.context.db.Owner.destroy({where: {id: req.params.id}}).then(() => {
        res.status(204).json();
    }, () => {
        res.status(400).json({error: {message: 'An error occurred while deleting.'}})
    });
});

export default router;