import express from 'express';

import prisma from '../script.js';
const router = express.Router();


//create a message between two users
router.post('/', async (req, res)=>{
    const { text, sender, receiver, bid } = req.body;
    const message = await prisma.message.create({
        data: {
            message: text,
            sender,
            receiver,
            bid
        }

    })
    res.json(message);
}
)

// get all messages between two users based on bid
router.get('/:id', async (req, res)=>{
    const messages = await prisma.message.findMany({
        where: {
            bid: String(req.params.id)
        }
    })
    res.json(messages);
}
)

export default router;
