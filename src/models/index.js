import 'dotenv/config';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER_NAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres'
});

const models = {
    Company: sequelize.import('./company'),
    Owner: sequelize.import('./owner'),
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize };

export default models;
