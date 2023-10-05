import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import tableRoutes from './routes/tableRoutes';
import quoteRoutes from './routes/quoteRoutes';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb://localhost/quoteDB'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/quotes', quoteRoutes);
app.use('/api/v1/tables', tableRoutes);

mongoose
    .connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`The server is running on port: ${PORT}`)
        )
    )
    .catch((error) => console.log(error.message));