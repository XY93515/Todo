import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const Name=process.env.DB_NAME;
const Connection = () => {

    const MONGODB_URI = `${Name}`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true,family:4 });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;