import { Merchant, Transaction } from './merchant.model';
import { CustomersService } from '../customers/customers.service';
export declare class MerchantsService {
    private readonly customerService;
    merchants: Merchant[];
    constructor(customerService: CustomersService);
    getMerchants(): Merchant[];
    getMerchant(merchantId: string): {
        id: string;
        name: string;
        isTrading: boolean;
        currency: string;
        transactions: Transaction[];
    };
    addTransaction(merchantId: string, customerId: string, description: string, amount: number): Transaction;
    private findMerchantById;
    private addTransactionsCustomerName;
}
