import { injectable } from "inversify";
import { createConnection, getConnection } from "typeorm";
import { User } from "../model/user-schema";
import { DatabaseService } from "../service/database-service";

export interface IUserRepository {
    getUser(): void;
}

@injectable()
export class UserRepositoryImpl implements IUserRepository {
    async getUser(): Promise<void> {
        console.log('In Repository...');
        const databaseService = new DatabaseService();
        await databaseService.getConnection();
        const connection = getConnection();
        const user = new User();
        user.name = 'sagar test 2';
        await connection.manager.save(user);
        console.log(await connection.getRepository(User).findOne({ id: 1 }));

    }

}