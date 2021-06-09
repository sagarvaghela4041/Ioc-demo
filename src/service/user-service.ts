import { validate } from "class-validator";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { UserDTO } from "../model/user";
import { IUserRepository } from "../repository/user-repository";
import TYPES from "../types";
import { ValidationService } from "./validation-service";

export interface IUserService {
    saveUser(req: Request, res: Response): void;
    getUser(req: Request, res: Response): void;
}
@injectable()
export class UserServiceImpl implements IUserService {

    private userRepository: IUserRepository;

    constructor(@inject(TYPES.UserRepository) userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async saveUser(req: Request, res: Response): Promise<void> {
        const user = new UserDTO(req.body);
        const validationResult = await validate(user);
        if (validationResult?.length) {
            const validationService = new ValidationService();
            res.send(validationService.createResponse(validationResult));
        }
        else {
            this.userRepository.saveUser(req, res);
        }
    }

    getUser(req: Request, res: Response): void {
        this.userRepository.getUser(req, res);
    }

}