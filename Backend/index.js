import express, { json } from 'express';
import cors from 'cors';
const listen_port=8000;
import userRouter from './user-routes.js';
const app = express()
app.use(express.json());
app.use(cors({origin:"*"}))
app.use(json());
app.use(express.static('public'));
app.use("/", userRouter);
app.listen((listen_port),()=>{
    console.log(`App listening to port ${listen_port}`);
})
