import { MerchantsService } from '../merchants/merchant.service';
import { CustomersService } from '../customers/customers.service';
import mockMerchants from '../../mockData/mockMerchants.json';


describe('test customers.service', () => {
  beforeEach(async () => {
    jest.resetModules();
  });

  it('getMerchants', ()=>{
    const placeHolder = 'customer name';
    const merchantsService = setUpMerchantsService(placeHolder);
    expect(merchantsService.getMerchants().length).toBe(mockMerchants.length);
    expect(merchantsService.getMerchants()[0].transactions[0]).toEqual({
       ...mockMerchants[0].transactions[0], customerName: placeHolder
    })
  })

  it('getMerchants', ()=>{
    const placeHolder = 'customer name';
    const merchantsService = setUpMerchantsService(placeHolder);
    const merchant = merchantsService.getMerchant('001');
    expect(merchant.id).toBe(mockMerchants[0].id);
    expect(merchant.name).toBe(mockMerchants[0].name);
    expect(merchant.currency).toBe(mockMerchants[0].currency);
  })

  it('getMerchants, merchant not exist', ()=>{
    const placeHolder = 'customer name';
    const merchantsService = setUpMerchantsService(placeHolder);
    try{
      merchantsService.getMerchant('001');
    }catch(e){
      expect(e.message).toBe("Could not find the merchant.");
    }
  })

  it('addTransaction', ()=>{
    const placeHolder = 'customer name';
    const merchantsService = setUpMerchantsService(placeHolder);
    merchantsService.addTransaction('001','003','test_description',12);
    const firstMerchant = merchantsService.merchants[0];
    const transactions = firstMerchant.transactions;
    expect(transactions[transactions.length -1].amount).toBe(12);
    expect(transactions[transactions.length -1].customerId).toBe('003');
    expect(transactions[transactions.length -1].description).toBe('test_description');
  })

  it('addTransaction, merchant not exist', ()=>{
    const placeHolder = 'customer name';
    const merchantsService = setUpMerchantsService(placeHolder);
    try{
      merchantsService.addTransaction('111','003','test_description',12);
    }catch(e){
      expect(e.message).toBe("Could not find the merchant.");
    }
  })

  const setUpMerchantsService = (placeHolder: string) =>{
    const customersService = new CustomersService();
    jest.spyOn(customersService, 'getCustomerNameById').mockReturnValue(placeHolder);
    return new MerchantsService(customersService);
  }

});