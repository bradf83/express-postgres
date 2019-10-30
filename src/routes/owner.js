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
    // TODO
    // Create an owner from the request body, return created.
    // What if there is an error?
    // What if validations fail?
    const created = await req.context.db.Owner.create(req.body);
    return res.status(201).json();
});

router.delete('/:id', async (req, res) => {
    // TODO
    // Delete with a where clause
    // This is async so the server will respond before finishing?
    req.context.db.Owner.destroy({where: {id: req.params.id}});
    return res.status(204).json();
});

export default router;