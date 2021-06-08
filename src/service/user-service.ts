import { injectable } from "inversify";

export interface UserService {
    getUser(): void;
}
@injectable()
export class UserServiceImpl implements UserService {
    getUser(): void {
        console.log(`In Service Layer...`);
    }

}