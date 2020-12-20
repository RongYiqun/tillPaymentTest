import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {MerchantsService} from './merchant.service';

@Controller('merchants')
export class MerchantController {
  constructor(private readonly merchantService: MerchantsService) {}

  @Get()
  getAllMerchants(){
      return this.merchantService.getMerchants();
  }

  @Get(':id')
  getMerchant(@Param('id') merchantId: string){
      return this.merchantService.getMerchant(merchantId);
  }

  @Post(':id')
  addTransaction(
      @Param('id') merchantId: string,
      @Body('customerId') customerId: string,
      @Body('description') description: string,
      @Body('amount') amount: number
    ){
      return this.merchantService.addTransaction(
          merchantId, customerId, description, amount);  
  }
}
