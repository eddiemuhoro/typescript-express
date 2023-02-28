import express from 'express';

import prisma from '../script.js';

const router = express.Router();

router.post('/register', async (req, res)=>{
    const { name, email, password, phone } = req.body;
    const employee = await prisma.employee.create({
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
    res.json(employee);
}
)


router.post('/login', async (req, res)=>{
    const { email, password } = req.body;
    const employee = await prisma.employee.findUnique({
        where: {
            email: email
        }
    })
    if(employee?.password === password){
        res.json(employee);
    }else{
        res.json({message: 'Wrong credentials'});
    }
}
)

//get all employees
router.get('/', async (req, res)=>{
    const employees = await prisma.employee.findMany();
    res.json(employees);
}
)

export default router;