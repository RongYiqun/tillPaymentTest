import {TransactionType, MerchantType} from '../../../types';
export class Transaction implements TransactionType{
    constructor(
        public id: string, 
        public amount: number,
        public description : string,
        public ccLastFour : string,
        public ccExpiry : string,
        public ccToken: string,
        public customerId: string,
        public date: string
    ){
    }
}


export class Merchant implements MerchantType{
    constructor(
        public id : string,
        public name : string,
        public isTrading : boolean,
        public currency : string,
        public transactions : Transaction[]  
    ){}
}