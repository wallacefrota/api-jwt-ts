import { Request, Response } from "express";
import { HttpStatusCode } from "../helpers/httpStatusCode";
import { generateToken } from "../helpers/generateToken";
import { UserPayload } from "../helpers/userPayload";
import db from '../../db.json';

// function to validate login and return token assigned
export function authControllerLogin(req: Request, res: Response) {

    const {username, password} = req.body;

    // simulate find in database
    const user = db.users.find((user) => user.username === username && user.password === password);

    if(!user) return res.status(HttpStatusCode.Unauthorized).json({
        message: 'Failed in login username or password incorrect'
    });

    // array permission path access string[]
    const permissions = user.permissions.map((permission) => permission.path);

    const payload: UserPayload = {
        userId: user.id,
        username: user.username,
        permissions: permissions
    }

    const token = generateToken(payload);

    return res.status(HttpStatusCode.Ok).json({
        message: 'User authenticated',
        token
    })
}