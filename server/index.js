import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import authRoutes from "./routes/authRoute.js";

const app = express();


app.use(cors());
console.log("hloo");
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/auth',authRoutes);
app.use('/', Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));