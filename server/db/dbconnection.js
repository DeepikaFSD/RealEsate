import mongoose from 'mongoose';
import dotenv from 'dotenv';

export default function connectWithDb() {
  dotenv.config();
  const MongoUrl = process.env.MONGO_URI;
  console.log(MongoUrl);
  mongoose
    .connect(MongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('connected to mongodb');
    })
    .catch((err) => {
      console.log(err.message);
      process.exit();
    });
}
