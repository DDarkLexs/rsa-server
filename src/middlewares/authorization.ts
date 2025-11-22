import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY || "";
console.log(process.env.API_KEY);
export function verifyApiKey(req: Request, res: Response, next: NextFunction) {
    const key = req.headers["x-api-key"];

    if (!key || key !== API_KEY) {
        return res.status(401).json({ error: "Unauthorized: Invalid API Key" });
    }

    next();
}
