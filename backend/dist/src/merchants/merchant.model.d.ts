export declare class Transaction {
    id: string;
    amount: number;
    description: string;
    ccLastFour: string;
    ccExpiry: string;
    ccToken: string;
    customerId: string;
    date: string;
    customerName: string;
    constructor(id: string, amount: number, description: string, ccLastFour: string, ccExpiry: string, ccToken: string, customerId: string, date: string);
}
export declare class Merchant {
    id: string;
    name: string;
    isTrading: boolean;
    currency: string;
    transactions: Transaction[];
    constructor(id: string, name: string, isTrading: boolean, currency: string, transactions: Transaction[]);
}
