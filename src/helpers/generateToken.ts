import jwt from 'jsonwebtoken';
import { UserPayload } from './userPayload';

// this secret variable  
const SECRET = "umafrasemuitodificil";

// generate token assigned with payload user
export function generateToken(payload: UserPayload) {
    const EXPIRES_IN_ONE_HOUR = 60 * 60;
    return jwt.sign(payload, SECRET, {
        expiresIn: EXPIRES_IN_ONE_HOUR
    });
}