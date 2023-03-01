import express from 'express';

import prisma from '../script.js';

const router = express.Router();

router.post('/register', async (req, res)=>{
    const { name, email, password, phone } = req.body;
    const employer = await prisma.employer.create({
        data: {
            name,
            email,
            password,
            phone
        },
        select:{
            id: true,
            name: true,
            email: true,
        }
    })
    res.json(employer);
}
)


router.post('/login', async (req, res)=>{
    const { email, password } = req.body;
    const employer = await prisma.employer.findUnique({
        where: {
            email: email
        }
    })
    if(employer?.password === password){
        res.json(employer);
    }else{
        res.json({message: 'Wrong credentials'});
    }
}
)

//get all employers
router.get('/', async (req, res)=>{
    const employers = await prisma.employer.findMany();
    res.json(employers);
}
)

export default router;