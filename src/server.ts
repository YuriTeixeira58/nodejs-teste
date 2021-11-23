import 'reflect-metadata';
import 'dotenv/config'
import  swaggerUi from 'swagger-ui-express'


import express from 'express';
import routes from './routes';
import swaggerFile from "./swagger.json"

import './database'

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routes);

app.listen(3333, () => {
  console.log('listening on port 3333');
})
