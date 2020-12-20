import { Module } from '@nestjs/common';
import {MerchantController} from './merchant.controller';
import {MerchantsService } from './merchant.service';
import {CustomersService} from '../customers/customers.service';

@Module({
    controllers: [MerchantController],
    providers: [MerchantsService, CustomersService]

})
export class MerchantModule {}