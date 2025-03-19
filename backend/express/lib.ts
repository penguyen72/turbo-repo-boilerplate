import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;
const JWT_SECRET = 'secret';

/*
This function returns a hashed password given a password
*/
export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/*
This function returns a boolean based on whether password is equal to hashedPassword
*/
export function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

/*
This function returns a token that contains the given inputted payload
*/
export function generateToken(payload: string | Buffer | object): string {
  return jwt.sign(payload, JWT_SECRET);
}

/*
This function returns a boolean based on whether or not the token is valid
*/
export function verifyToken(token: string): boolean {
  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}
