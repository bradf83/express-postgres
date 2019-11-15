import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from "../routes";
import db from '../../models';
import helmet from "helmet";

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
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

export default app;