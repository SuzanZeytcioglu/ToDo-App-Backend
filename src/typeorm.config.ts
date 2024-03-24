import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    database: process.env.DATABASE_NAME || 'todo_db',
    entities: [__dirname + '/**/*.entity.{js,ts}'],
    synchronize: process.env.DATABASE_SYNC === 'true' || true,
    logging: process.env.DATABASE_LOGGING === 'true' || true,
};

export default typeOrmConfig;
