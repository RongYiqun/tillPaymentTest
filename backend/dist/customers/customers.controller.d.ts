import { CustomersService } from './customers.service';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomersService);
    addCustomer(name: string, merchantId: string): {
        id: any;
    };
    getAllCustomers(): import("./customer.model").Customer[];
    getCustomer(customerId: string): {
        id: string;
        name: string;
        merchantId: string;
    };
    updateCustomer(customerId: string, name: string, merchantId: string): {
        id: string;
        name: string;
        merchantId: string;
    };
    deleteCustomer(customerId: string): any;
}
