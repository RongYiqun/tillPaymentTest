import { Customer } from './customer.model';
export declare class CustomersService {
    customers: Customer[];
    idIncrementor: number;
    constructor();
    insertCustomer(name: string, merchantId: string): string;
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
    getCustomerNameById(customerId: string): string;
    private findCustomerById;
}
