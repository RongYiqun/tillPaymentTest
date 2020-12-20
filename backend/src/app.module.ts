import { Module } from '@nestjs/common';
import { CustomerModule } from './customers/customer.module';
import { MerchantModule } from './merchants/merchant.module';

@Module({
  imports: [CustomerModule, MerchantModule],
})
export class AppModule {}
