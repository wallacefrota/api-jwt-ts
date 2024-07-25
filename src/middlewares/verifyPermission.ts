import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../helpers/httpStatusCode';
import { UserPayload } from '../helpers/userPayload';

import jwt from 'jsonwebtoken';

// verify user have permission to access path/route
export function verifyPermission(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace('Bearer ', '') ?? '';
    console.log(req.path);
    const path = req.path.replace('/', '');

    const payload = jwt.decode(token) as UserPayload;
    console.log(payload)

    // when don't have permission
    if(!payload.permissions.includes(path)) return res.status(HttpStatusCode.Unauthorized).json({
        message: 'You don\'t have permission to access this route'
    })

    next();
}