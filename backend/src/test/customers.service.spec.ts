import { CustomersService } from '../customers/customers.service';
import mockCustomers from '../../mockData/mockCustomers.json';
import {NotFoundException} from '@nestjs/common';

describe('test customers.service', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('insert new Customer', () => {
    const customersService = new CustomersService();
    const name = 'Jeff';
    const merchantId = '001';
    const id = customersService.insertCustomer(name, merchantId);
    expect(id).toBe('0010');
    const length = customersService.customers.length;
    expect(customersService.customers[length - 1].name).toBe(name);
    expect(customersService.customers[length - 1].merchantId).toBe(merchantId);
  });

  it('getCustomers', () => {
    const customersService = new CustomersService();
    expect(customersService.getCustomers()).toStrictEqual(mockCustomers);
  });

  it('getCustomer, it exist', () => {
    const customersService = new CustomersService();
    expect(customersService.getCustomer('001')).toStrictEqual(mockCustomers[0]);
  });

  it('getCustomer, it not exist', () => {
    const customersService = new CustomersService();
    try {
      expect(customersService.getCustomer('111')).toThrow(NotFoundException);
    }catch(e){
      expect(e.message).toBe("Could not find the customer.");
    }
  });

  it('updateCustomer', () => {
    const customersService = new CustomersService();
    const newName = "testName";
    const newMerchantId = "002"
    customersService.updateCustomer('001', newName, newMerchantId);
    expect(customersService.customers[0].name).toBe(newName);
    expect(customersService.customers[0].merchantId).toBe(newMerchantId);
  })

  it('updateCustomer, it not exist', () => {
    const customersService = new CustomersService();
    const newName = "testName";
    const newMerchantId = "002"
    try {
        customersService.updateCustomer('111', newName, newMerchantId);
    }catch(e){
        expect(e.message).toBe("Could not find the customer.");
    }
  })

  it('deleteCustomer', ()=>{
    const customersService = new CustomersService();
    customersService.deleteCustomer('001');
    expect(customersService.customers.find( (c) => c.id === '001')).toBe(undefined);
  })

  it('getCustomerNameById', () =>{
    const customersService = new CustomersService();
    expect(customersService.getCustomerNameById('001')).toBe(mockCustomers[0].name);
  })
  
});
