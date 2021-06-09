import { Request, Response } from "express";
import { injectable } from "inversify";
import { Any, Connection, getConnection } from "typeorm";
import { User } from "../model/user-schema";
import { DatabaseService } from "../service/database-service";

export interface IUserRepository {
    connection: Connection;
    saveUser(req: Request, res: Response): void;
    getUser(req: Request, res: Response): void;
}

@injectable()
export class UserRepositoryImpl implements IUserRepository {
    connection!: Connection;
    constructor() {
        const databaseService = new DatabaseService();
        databaseService.getConnection().then(connection => this.connection = connection);
    }
    async saveUser(req: Request, res: Response): Promise<void> {
        const user = req.body;
        const userRepository = this.connection.getRepository(User);
        const savedUser = await userRepository.save(user);
        res.status(200).send(savedUser);
    }

    async getUser(req: Request, res: Response): Promise<void> {
        const userId = req.params.id;
        const user = await this.connection.getRepository(User).findOne({ id: parseInt(userId) });
        res.status(200).send(user);
    }

}