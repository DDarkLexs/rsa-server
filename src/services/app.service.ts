import { CrudService } from './crud.service';

export class AppService  {

    constructor() {
    }

    async createSign(data: any): Promise<any> {

        console.log(data)
        return data;
    }
}