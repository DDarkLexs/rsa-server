import { CrudService } from './crud.service';
import * as keys from '../utils/index'
import { IHashRequest } from '../interfaces/crud.interface';
import crypto from 'crypto';

interface RSAKeys {
    publicKey: string;
    privateKey: string;
}

export class AppService  {
    constructor() {}

    async createSign(data: IHashRequest): Promise<any> {
        const signature = crypto.sign(
            "RSA-SHA256",
            Buffer.from(data.hash),
            keys.privateKey
        );
        return {
            signature: signature.toString("base64"),
        };
    }
    async getAllRSAKey(): Promise<RSAKeys> {
        try {
            return {
                publicKey: keys.publicKey,
                privateKey: keys.privateKey,
            };
        } catch (error) {
            throw error;
        }
    
    };
}