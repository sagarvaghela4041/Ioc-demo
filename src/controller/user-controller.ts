import { inject, injectable } from "inversify";
import { RegistrableController } from "./registrable-controller";
import express, { Request, Response } from 'express';
import { UserService } from "../service/user-service";
import TYPES from "../types";

@injectable()
export class UserController implements RegistrableController {

    private userService: UserService;

    constructor(@inject(TYPES.UserService) userService: UserService) {
        this.userService = userService;
    }

    register(app: express.Application): void {
        app.route('/test').get((req: Request, res: Response) => this.userService.getUser())

    }
}