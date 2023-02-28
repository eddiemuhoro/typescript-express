import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/employer.js';

dotenv.config();


const app = express();

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
))

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/employer', router);



const port= 4000 || process.env.PORT

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);
