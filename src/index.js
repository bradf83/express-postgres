import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import db from '../queries';

const app = express();

// Middleware
app.use(cors());

app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}.`)
);

// Routes

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/companies', db.getCompanies);
app.get('/companies/:id', db.getCompanyById);