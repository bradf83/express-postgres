import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Sent via JSON
app.use(express.urlencoded({ extended: true })); // Sent via HTML Form

// Routes
app.use('/companies', routes.company);

// Start server
app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}.`)
);

