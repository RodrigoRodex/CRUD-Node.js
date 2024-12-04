import { Router } from "express";
import { listUsers, createUser, deleteUser, updateUser } from "../services/userServ";

const router = Router();

router.get('/', async (req, res) => {
    const userList = await listUsers();
    res.send(userList)
})

router.post('/', async (req, res) => {
    try {
        const user = await createUser(req.body)
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    await deleteUser(req.params.id)
    res.send()
})

router.put('/:id', async (req, res) => {
    await updateUser(req.params.id, req.body)
    res.send();
});

export default router;