import express from 'express';
import cors from 'cors'
import { router } from './router';

const app = express();

app.use(express.json())
app.use(cors())
app.use(router)
app.listen((4444), () => console.log('servidor rodando na porta 4444'))
