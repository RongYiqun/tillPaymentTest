import { Customer } from './customer.model';
export declare class CustomersService {
    customers: Customer[];
    insertCustomer(name: string, merchantId: string): any;
    getCustomers(): Customer[];
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
    deleteCustomer(customerId: string): void;
    private findCustomerById;
}
