import {Injectable, NotFoundException} from '@nestjs/common';
import {Merchant, Transaction} from './merchant.model'
import {MerchantType, TransactionType} from '../../../types';
import { v4 as uuid} from 'uuid';
import {CustomersService} from '../customers/customers.service';
import mockMerchants from '../../mockData/mockMerchants.json';

@Injectable()
export class MerchantsService{

    merchants : MerchantType[] = mockMerchants as MerchantType[];

    constructor(private readonly customerService: CustomersService) {}

    getMerchants(){
        const allMerchants = [...this.merchants];
        allMerchants.forEach(
            (merchant) => {
                this.addTransactionsCustomerName(merchant.transactions);
            }
        )

        return allMerchants;
    }

    getMerchant(merchantId : string){
        const merchant = this.findMerchantById(merchantId);
        const currentMerchant = {...merchant};
        this.addTransactionsCustomerName(currentMerchant.transactions);
        return currentMerchant;
    }

    addTransaction(
        merchantId : string, 
        customerId : string, 
        description : string,
        amount : number
        ){
        const merchant = this.findMerchantById(merchantId);
        const newTransaction = new Transaction(
                uuid(), amount, description,
                '', '', uuid(), customerId, (new Date()).toISOString()
                );
        merchant.transactions.push(newTransaction);
        
        return newTransaction;
    }

    private findMerchantById(merchantId : string){
        const merchant = this.merchants.find( (merchant) => merchant.id === merchantId);
        if(!merchant){
            throw new NotFoundException('Could not find the merchant.');
        }
        return merchant;
    }

    private addTransactionsCustomerName(transactions : TransactionType[]){
        transactions.forEach(
            (transaction) =>{
                transaction.customerName = 
                    this.customerService.getCustomerNameById(transaction.customerId);
            }
        )
    }
}