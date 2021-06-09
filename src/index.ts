import 'reflect-metadata';
import express from 'express';
import { json } from 'body-parser';
import { RegistrableController } from './controller/registrable-controller';
import container from './inversify.config';
import TYPES from './types';
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(json());

const contollers: RegistrableController[] = container.getAll<RegistrableController>(TYPES.Controller);
contollers.forEach(contoller => contoller.register(app));

app.listen(`${process.env.PORT}`, () => console.log(`Server started at port : ${process.env.PORT}`))