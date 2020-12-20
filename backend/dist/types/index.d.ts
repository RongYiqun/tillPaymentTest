export interface TransactionType {
    id: string;
    amount: number;
    description: string;
    ccLastFour: string;
    ccExpiry: string;
    ccToken: string;
    customerId: string;
    customerName?: string;
    date: string;
}
export interface MerchantType {
    id: string;
    name: string;
    isTrading: boolean;
    currency: string;
    transactions: TransactionType[];
}
export interface CustomerType {
    id: string;
    merchantId: string;
    name: string;
}
