
import express from 'express';
import apiRouter from './api.js';
import cors from 'cors';

const app = express();


// Enable CORS for all routes
app.use(cors());

app.use(express.static('public'));

app.use('/api', apiRouter);


