import { injectable } from "inversify";
import { RegistrableController } from "./registrable-controller";
import express, { Request, Response } from 'express';

@injectable()
export class UserController implements RegistrableController {

    register(app: express.Application): void {
        app.route('/test').get((req: Request, res: Response) => res.send('hey !'))

    }
}