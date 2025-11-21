import { CrudService } from './crud.service';
import * as keys from '../utils/index'

export class AppService  {

    constructor() {
    }

    async createSign(data: any): Promise<any> {

        console.log(keys.privateKey)
        return keys.privateKey;
    }
}