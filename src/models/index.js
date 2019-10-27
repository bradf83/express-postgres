import 'dotenv/config';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER_NAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres'
});

const models = {
    Company: sequelize.import('./company'),
};

export { sequelize };

export default models;
