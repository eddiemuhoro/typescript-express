import express from 'express';
import prisma from '../script.js';
const router = express.Router();

router.post('/', async (req, res)=>{
    //bid on a job
    const {name, description,job,belongToEmployee, belongToJob } = req.body;
    const bid = await prisma.bid.create({
        data: {
            name,
            job,
            description,
            belongToEmployee,
            belongToJob
        }
    })
    res.json(bid);
}
)

//get all bids
router.get('/', async (req, res)=>{
    const bid = await prisma.bid.findMany();
    res.json(bid);
}
)

//get bid by job id
router.get('/job/:id', async (req, res)=>{
    const bid = await prisma.bid.findMany({
        where: {
            //id is a string
            belongToJob: String(req.params.id)
        }
    })
    res.json(bid);
}
)
//get bid of an employee
router.get('/:id', async (req, res)=>{
    const bid = await prisma.bid.findMany({
        where: {
            //id is a string
            belongToEmployee: String(req.params.id)
        }
    })
    res.json(bid);
}
)

export default router;