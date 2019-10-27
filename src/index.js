import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from "./routes";
import models, {sequelize} from "./models";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Sent via JSON
app.use(express.urlencoded({ extended: true })); // Sent via HTML Form

// Custom Middleware (TODO: Should this be done like this?)
app.use((req, res, next) => {
    req.context = {
        models,
    };
    next();
});


// Routes
app.use('/companies', routes.company);
app.use('/owners', routes.owner);

// Sequelize and then start server
sequelize.sync().then(async () => {
    app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}.`)
    );
});


