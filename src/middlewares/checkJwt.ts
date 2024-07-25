import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../helpers/httpStatusCode';

import jwt from 'jsonwebtoken';

const SECRET = "umafrasemuitodificil";

// check token and validate
export function checkJwt(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers['authorization'];

    if(!authorization) return res.status(HttpStatusCode.BadRequest).json({
        message: 'Token has not provided'
    });

    const token = authorization.replace('Bearer ', '');

    if(!token) return res.status(HttpStatusCode.BadRequest).json({
        message: 'Token has not provided'
    });

    // verify token
    try {
        jwt.verify(token, SECRET);
    } catch (error: any) {
        return res.status(HttpStatusCode.Unauthorized).json({
            message: error.message
        })
    }

    // call new middleware or controller
    next();
}