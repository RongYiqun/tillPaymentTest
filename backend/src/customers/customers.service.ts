import {Injectable, NotFoundException} from '@nestjs/common';
import {Customer} from './customer.model';

import mockCustomers from '../../mockData/mockCustomers.json';

@Injectable()
export class CustomersService{

    customers : Customer[] = mockCustomers as Customer[];
    idIncrementor = 0;

    constructor(){
        this.idIncrementor = this.customers.length + 1;
    }

    insertCustomer(name: string, merchantId: string){
        const customerId = `00${this.idIncrementor++}`;
        const newCustomer = new Customer(customerId, name, merchantId);
        this.customers.push( newCustomer );
        return customerId;
    }

    getCustomers(){
        return [...this.customers]
    }

    getCustomer(customerId : string){
        const customer = this.findCustomerById(customerId);
        return {...customer};
    }

    updateCustomer(customerId : string, name : string, merchantId: string){
        const customer = this.findCustomerById(customerId);
        if(name){
            customer.name = name;
        }
        if(merchantId){
            customer.merchantId = merchantId;
        }
        return {...customer}
    }

    deleteCustomer(customerId : string){
        this.customers = this.customers.filter( (customer) => customer.id != customerId);
    }

    getCustomerNameById(customerId : string){
        try{
            const customer = this.findCustomerById(customerId);
            return customer.name;
        }catch(err){
            console.log(err);
            return '';
        }
    }

    private findCustomerById(customerId : string){
        const customer = this.customers.find( (customer) => customer.id === customerId);
        if(!customer){
            throw new NotFoundException('Could not find the customer.');
        }
        return customer;
    }
}