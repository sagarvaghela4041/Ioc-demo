import { inject, injectable } from "inversify";
import { IUserRepository } from "../repository/user-repository";
import TYPES from "../types";

export interface IUserService {
    getUser(): void;
}
@injectable()
export class UserServiceImpl implements IUserService {

    private userRepository: IUserRepository;

    constructor(@inject(TYPES.UserRepository) userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }
    getUser(): void {
        console.log(`In Service Layer...`);
        this.userRepository.getUser();
    }

}