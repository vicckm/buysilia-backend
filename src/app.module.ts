import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { SupplierModule } from './supplier/supplier.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_MONGO_URI),
    ProductsModule,
    SupplierModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
