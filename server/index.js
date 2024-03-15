import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectWithDb from './db/dbconnection.js';
import EmailModel from './model/EmailModel.js';

const app = express();

//mongodb connection
connectWithDb();

app.use(express.json());
app.use(cookieParser());

// Allow all origins
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3001/', // Allow requests from this origin
  })
);

// Define the route for handling email subscriptions
app.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body);

    // Create a new subscription document and save it to the database
    const subscription = new EmailModel({ email });
    await subscription.save();

    // Respond with a success message
    res.status(201).json({ message: 'Subscription successful' });
  } catch (err) {
    // If an error occurs, log it and send a 500 status with an error message
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(4000);
