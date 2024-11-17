import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import nasaRoutes from './routes/nasaRoutes.js';


import mongoose from 'mongoose';
const db_password='Chloe=0308'
const uri = `mongodb+srv://ysbrian0308:${db_password}@iptime7.vjkfq.mongodb.net/?retryWrites=true&w=majority&appName=iptime7`;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connect_mongodb() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
      console.error('mongodb connect error: ', err);
  }
}
connect_mongodb();
const app = express();
app.use(cors());

app.use('/api/nasa', nasaRoutes); // localhost:3005/api/nasa

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
