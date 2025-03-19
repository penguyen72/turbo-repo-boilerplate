import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { hashPassword, comparePassword, generateToken, verifyToken } from 'lib';
import { createUser, getUser, getCars } from 'db';

dotenv.config({ path: '../../.env' });

const router = express.Router();

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

router.get('/', (req, res) => {
  try {
    res.status(200).send('This is the API root!');
  } catch {
    res.status(500).send('Internal Server Error');
  }
});

router.post('/register', async (req, res) => {
  try {
    res.status(200).send('Register user');
  } catch {
    res.status(500).send('Internal Server Error');
  }
});

router.get('/get-cars', async (req, res) => {
  try {
    res.status(200).send('Returns cars');
  } catch {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
