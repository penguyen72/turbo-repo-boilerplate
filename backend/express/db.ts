import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

async function getUser(username: string) {
  const params = new URLSearchParams({
    username,
  });
  const response = await axios.get(`http://localhost:3000/users?${params.toString()}`);
  return response.data;
}

async function createUser(username: string, password: string) {
  const id = uuidv4();
  const response = await axios.post('http://localhost:3000/users', { id, username, password });
  return response.data;
}

async function getCars() {
  const response = await axios.get('http://localhost:3000/cars');
  return response.data;
}

export default { getUser, createUser, getCars };
