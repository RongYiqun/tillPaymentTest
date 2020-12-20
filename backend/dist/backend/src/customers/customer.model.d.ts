import { CustomerType } from '../../../types';
export declare class Customer implements CustomerType {
    id: string;
    name: string;
    merchantId: string;
    constructor(id: string, name: string, merchantId: string);
}
