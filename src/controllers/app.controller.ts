import { Request, Response, NextFunction } from 'express';
import { AppService } from '../services/app.service';

export class AppController {
    private appService: AppService;

    constructor() {
        this.appService = new AppService();
    }

    async sign(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body;
              if (!data.hash) {
                    return res.status(400).json({ error: "hash is required" });
                }
            const sign = await this.appService.createSign(data);
            return res.status(201).json(
                {...sign});
        } catch (error) {
            return next(error);
        }
    }
    async getAllRSAKey(req: Request, res: Response, next: NextFunction) {
        try {
            const keys = await this.appService.getAllRSAKey();
            return res.status(201).json(keys);
        } catch (error) {
            return next(error);
        }
    }

}