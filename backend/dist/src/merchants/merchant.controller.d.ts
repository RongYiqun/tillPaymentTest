import { MerchantsService } from './merchant.service';
export declare class MerchantController {
    private readonly merchantService;
    constructor(merchantService: MerchantsService);
    getAllMerchants(): import("./merchant.model").Merchant[];
    getMerchant(merchantId: string): {
        id: string;
        name: string;
        isTrading: boolean;
        currency: string;
        transactions: import("./merchant.model").Transaction[];
    };
    addTransaction(merchantId: string, customerId: string, description: string, amount: number): import("./merchant.model").Transaction;
}
