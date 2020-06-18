import {Sequelize} from 'sequelize';
import {userFactory} from './model/User';
export * from './UserDBModel';

export const sequelize = new Sequelize(
  process.env.DB_NAME || 'ddd',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'password',
  {
    port: Number(process.env.DB_PORT) || 3306,
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
);

export const UserSequelizeModel = userFactory(sequelize);
