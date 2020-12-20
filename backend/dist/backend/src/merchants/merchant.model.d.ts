import { TransactionType, MerchantType } from '../../../types';
export declare class Transaction implements TransactionType {
    id: string;
    amount: number;
    description: string;
    ccLastFour: string;
    ccExpiry: string;
    ccToken: string;
    customerId: string;
    date: string;
    constructor(id: string, amount: number, description: string, ccLastFour: string, ccExpiry: string, ccToken: string, customerId: string, date: string);
}
export declare class Merchant implements MerchantType {
    id: string;
    name: string;
    isTrading: boolean;
    currency: string;
    transactions: Transaction[];
    constructor(id: string, name: string, isTrading: boolean, currency: string, transactions: Transaction[]);
}
