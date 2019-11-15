import 'dotenv/config';
import db from '../models';
import server from './server';

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
        server.listen(process.env.PORT, () =>
            console.log(`Example app listening on port ${process.env.PORT}.`)
        );
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });





