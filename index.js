import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


const app = express();


app.get('/', (req, res) => {
    res.send('Hello World...!');
    }
);


const port= 4000 || process.env.PORT

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);
