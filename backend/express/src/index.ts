import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { getTodos, getTodo, createTodo, updateTodo, deleteTodo } from 'db';

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

router.get('/todos', async (req, res) => {
  const todos = await getTodos();
  res.status(200).json(todos);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
