import express from 'express';

import prisma from '../script.js';

const router = express.Router();

router.post('/', async (req, res)=>{
    const { title, description, employerId, skills } = req.body;
    const job = await prisma.job.create({
        data: {
          title: title,
          description: description,
          employerId: employerId,
          skills: skills
        },
    })
    res.json(job);
}
)

//get all jobs
router.get('/', async (req, res)=>{
    const jobs = await prisma.job.findMany();
    res.json(jobs);
}
)

//het a job by id
router.get('/employer/:id', async (req, res)=>{
    const job = await prisma.job.findMany({
        where:{
            //id is a string
            employerId: String(req.params.id)
        }
    })
    res.json(job);
}
)



//get a single job from employer using job id
router.get('/:id', async (req, res)=>{
    const job = await prisma.job.findUnique({
        where: {
            id: String(req.params.id)
        }
    })
    res.json(job);
}
)


//update favorite job
router.put('/favorite/:id', async (req, res) => {
    const { isFavorite, byFreelancer } = req.body;
    const job = await prisma.job.update({
        where: {
            id: String(req.params.id)
        },
        data: {
            isFavorite: isFavorite,
            favoritedBy: byFreelancer

        }
    })
    res.json(job);
}
)
//fetch job where isFavorite is true
router.get('/favorite/:id', async (req, res)=>{
    const job = await prisma.job.findMany({
        where: {
            isFavorite: true,
            favoritedBy: String(req.params.id)
        }
    })
    res.json(job);
}
)

//fetch the boolean value
router.get('/favorite/:id', async (req, res)=>{
    const job = await prisma.job.findUnique({
        where: {
            id: String(req.params.id)
        },
       
    })
    res.json(job);
}
)


// router.delete('/:id', async (req, res)=>{
 
//     const job = await prisma.job.delete({
//         where: {
//             id: parseInt(req.params.id)
//         }
//     })
//     res.json(job);
// }
// )

export default router;