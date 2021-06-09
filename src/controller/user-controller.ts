import { inject, injectable } from "inversify";
import { RegistrableController } from "./registrable-controller";
import express, { Request, Response } from 'express';
import { IUserService } from "../service/user-service";
import TYPES from "../types";

@injectable()
export class UserController implements RegistrableController {

    private userService: IUserService;

    constructor(@inject(TYPES.UserService) userService: IUserService) {
        this.userService = userService;
    }

    register(app: express.Application): void {
        app.route('/user').post((req: Request, res: Response) => this.userService.saveUser(req, res));
        app.route('/user/:id').get((req: Request, res: Response) => this.userService.getUser(req, res));

    }
}