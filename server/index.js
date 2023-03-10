import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
const DB_USER = 'anvin';
const DB_PSW = 'samsung123';
const CONNECTION_URL = `mongodb://${DB_USER}:${DB_PSW}@localhost:27017/mern_stack_socialmedia`;
const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', false);
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
