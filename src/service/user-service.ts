import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IUserRepository } from "../repository/user-repository";
import TYPES from "../types";

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

    saveUser(req: Request, res: Response): void {
        this.userRepository.saveUser(req, res);
    }

    getUser(req: Request, res: Response): void {
        console.log(`In Service Layer...`);
        this.userRepository.getUser(req, res);
    }

}