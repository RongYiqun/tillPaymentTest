import {CustomerType} from '../../../types';
export class Customer implements CustomerType {
    constructor(public id: string, public name: string, public merchantId: string){}
}