import { Request, Response, NextFunction } from "express";
import { HttpStatusCode } from "../helpers/httpStatusCode";

export function getCustomers(req: Request, res: Response, next: NextFunction) {
    return res.status(HttpStatusCode.Ok).json({
        message: 'success',
        contracts: 'List of customers'
    })
}