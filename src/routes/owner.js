import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const owners = await req.context.db.Owner.findAll();
    return res.status(200).json(owners);
});

router.get('/:id', async (req, res) => {
    const owner = await req.context.db.Owner.findByPk(req.params.id);
    if(owner){
        return res.status(200).json(owner);
    } else {
        return res.status(404).json({error: {message: 'Not found.'}});
    }

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

router.put('/:ownerId', async (req, res) => {
    let owner = await req.context.db.Owner.findByPk(req.params.ownerId);
    if(owner){
        owner.update(req.body);
        return res.status(200).json();
    } else {
        return res.status(404).json({error: {message: 'Not found.'}});
    }
});

router.delete('/:id', async (req, res) => {
    req.context.db.Owner.destroy({where: {id: req.params.id}}).then(() => {
        return res.status(204).json();
    }, () => {
        return res.status(400).json({error: {message: 'An error occurred while deleting.'}})
    });
});

export default router;