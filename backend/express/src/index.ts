import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {} from 'db';

dotenv.config({ path: '../../.env' });

const router = express.Router();

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

router.get('/', async (req, res) => {
  res.status(200).send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
