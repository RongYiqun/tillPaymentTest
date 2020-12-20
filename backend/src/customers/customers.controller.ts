import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import {CustomersService} from './customers.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomersService) {}

  @Post()
  addCustomer(
      @Body('name') name : string, 
      @Body('merchantId') merchantId : string
    ){
      const newCustomerId = this.customerService.insertCustomer(name, merchantId);
      return {id : newCustomerId}
  }

  @Get()
  getAllCustomers(){
      return this.customerService.getCustomers();
  }

  @Get(':id')
  getCustomer(@Param('id') customerId: string){
      return this.customerService.getCustomer(customerId);
  }

  @Patch(':id')
  updateCustomer(
    @Param('id') customerId: string, 
    @Body('name') name :string, 
    @Body('merchantId') merchantId: string){
      return this.customerService.updateCustomer(customerId, name, merchantId);
  }

  @Delete(':id')
  deleteCustomer(@Param('id') customerId: string){
      return this.customerService.deleteCustomer(customerId);
  }
}
