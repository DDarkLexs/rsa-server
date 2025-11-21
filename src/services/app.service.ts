import { CrudService } from './crud.service';
import * as keys from '../utils/index'
import { IHashRequest } from '../interfaces/crud.interface';
import crypto from 'crypto';


export class AppService  {

    constructor() {
    }

    async createSign(data: IHashRequest): Promise<any> {
        const signature = crypto.sign(
            "RSA-SHA256",
            Buffer.from(data.hash),
            keys.privateKey
        );
        console.log(data)
        return {
            signature: signature.toString("base64"),
        };
    }
}