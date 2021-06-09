import { Connection, createConnection, getConnection } from "typeorm";

export class DatabaseService {
    async getConnection(): Promise<Connection> {
        await createConnection();
        return getConnection();
    }
}

