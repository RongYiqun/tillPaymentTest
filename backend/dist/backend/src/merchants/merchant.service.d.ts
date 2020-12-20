import { Transaction } from './merchant.model';
import { MerchantType, TransactionType } from '../../../types';
import { CustomersService } from '../customers/customers.service';
export declare class MerchantsService {
    private readonly customerService;
    merchants: MerchantType[];
    constructor(customerService: CustomersService);
    getMerchants(): MerchantType[];
    getMerchant(merchantId: string): {
        id: string;
        name: string;
        isTrading: boolean;
        currency: string;
        transactions: TransactionType[];
    };
    addTransaction(merchantId: string, customerId: string, description: string, amount: number): Transaction;
    private findMerchantById;
    private addTransactionsCustomerName;
}
