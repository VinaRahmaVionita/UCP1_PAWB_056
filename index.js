import express from 'express';

import bodyParser from 'body-parser';

import bibitRouter from "../router/bibit.js";
//import pupukRouter from "../router/pupuk.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/bibit", bibitRouter);


