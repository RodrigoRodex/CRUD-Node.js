import express from 'express';
import userController from './controllers/userCon';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/user', userController)

app.listen(port, ()=>{
    console.log(`App rodando em http://localhost:${port}`)
});