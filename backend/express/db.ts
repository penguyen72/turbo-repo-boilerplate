import axios from 'axios';
import { Car, User } from 'schema';
import { v4 as uuidv4 } from 'uuid';

/*
This function returns a User given a username.
The return value is a promise for an array containing a single user.
*/
export async function getUser(username: string): Promise<User[]> {
  const params = new URLSearchParams({
    username,
  });
  const response = await axios.get(`http://localhost:3000/users?${params.toString()}`);
  return response.data;
}

/*
This function creates a user given a username and password.
The return value is a promise for a user 
*/
export async function createUser(username: string, password: string): Promise<User> {
  const id = uuidv4();
  const response = await axios.post('http://localhost:3000/users', { id, username, password });
  return response.data;
}

/*
This function returns a list of cars currently in the database
*/
export async function getCars(): Promise<Car> {
  const response = await axios.get('http://localhost:3000/cars');
  return response.data;
}
