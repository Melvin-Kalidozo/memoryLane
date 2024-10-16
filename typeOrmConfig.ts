import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";

export const typeOrmConfig:TypeOrmModuleOptions = {
    type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'newdb',
        entities: [],
        synchronize: true,
}

