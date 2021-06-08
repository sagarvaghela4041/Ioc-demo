import 'reflect-metadata';
import express from 'express';
import { json } from 'body-parser';
import { RegistrableController } from './controller/registrable-controller';
import container from './inversify.config';
import TYPES from './types';

const app = express();
app.use(json());

const contollers: RegistrableController[] = container.getAll<RegistrableController>(TYPES.Controller);
contollers.forEach(contoller => contoller.register(app));

app.listen(3000, () => console.log(`Server started !`))