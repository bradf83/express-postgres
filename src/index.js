import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from "./routes";
import db from '../models';

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Sent via JSON
app.use(express.urlencoded({ extended: true })); // Sent via HTML Form

// Custom Middleware (TODO: Should this be done like this?)
app.use((req, res, next) => {
    req.context = {
        db,
    };
    next();
});

// Routes
app.use('/companies', routes.company);
app.use('/owners', routes.owner);

// TODO: Consider checking the db to ensure we connect before starting the server.

app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}.`)
);


