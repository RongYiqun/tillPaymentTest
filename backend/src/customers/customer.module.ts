import { Module } from '@nestjs/common';
import {CustomerController} from './customers.controller';
import {CustomersService } from './customers.service';

@Module({
    controllers: [CustomerController],
    providers: [CustomersService]

})
export class CustomerModule {}