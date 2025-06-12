import axios from 'axios';
import { Todo } from 'schema';
import { v4 as uuidv4 } from 'uuid';

export async function getTodos(): Promise<Todo[]> {
  const response = await axios.get(`http://localhost:3000/todos`);
  return response.data;
}

export async function getTodo(id: string): Promise<Todo[]> {
  const params = new URLSearchParams({ id });
  const response = await axios.get(`http://localhost:3000/todos?${params.toString()}`);
  return response.data;
}

export async function createTodo(description: string): Promise<Todo> {
  const id = uuidv4();
  const response = await axios.post('http://localhost:3000/todos', { id, description, completed: false });
  return response.data;
}

export async function updateTodo(id: string, updatedFields: Partial<Todo>): Promise<Todo> {
  const response = await axios.patch(`http://localhost:3000/todos/${id}`, updatedFields);
  return response.data;
}

export async function deleteTodo(id: string): Promise<void> {
  await axios.delete(`http://localhost:3000/todos/${id}`);
}
