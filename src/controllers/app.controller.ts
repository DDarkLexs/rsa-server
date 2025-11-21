import { Request, Response, NextFunction } from 'express';
import { AppService } from '../services/app.service';

export class AppController {
    private appService: AppService;

    constructor() {
        this.appService = new AppService();
    }

    async sign(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.appService.createSign(req.body);
            return res.status(201).json(user);
        } catch (error) {
            return next(error);
        }
    }

    // async login(req: Request, res: Response, next: NextFunction) {
    //     console.log("ok")
    //     try {
    //         const { email, password } = req.body;
    //         // @ts-ignore
    //         const user = await this.userService.login(email, password);
    //         return res.status(200).json({ user });
    //     } catch (error) {
    //         next(error);
    //     }
    // }
}