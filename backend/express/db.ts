import axios from 'axios';
import { Car, User } from 'schema';
import { v4 as uuidv4 } from 'uuid';

export async function getUser(username: string): Promise<User[]> {
  const params = new URLSearchParams({
    username,
  });
  const response = await axios.get(`http://localhost:3000/users?${params.toString()}`);
  return response.data;
}

export async function createUser(username: string, password: string): Promise<User> {
  const id = uuidv4();
  const response = await axios.post('http://localhost:3000/users', { id, username, password });
  return response.data;
}

export async function getCars(): Promise<Car> {
  const response = await axios.get('http://localhost:3000/cars');
  return response.data;
}
