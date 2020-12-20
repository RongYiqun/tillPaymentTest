import { MerchantsService } from './merchant.service';
export declare class MerchantController {
    private readonly merchantService;
    constructor(merchantService: MerchantsService);
    getAllMerchants(): import("../../../types").MerchantType[];
    getMerchant(merchantId: string): {
        id: string;
        name: string;
        isTrading: boolean;
        currency: string;
        transactions: import("../../../types").TransactionType[];
    };
    addTransaction(merchantId: string, customerId: string, description: string, amount: number): import("./merchant.model").Transaction;
}
