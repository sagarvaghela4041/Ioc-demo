import { createConnection } from "typeorm";

export class DatabaseService {
    async getConnection(): Promise<void> {
        await createConnection();
    }

}
