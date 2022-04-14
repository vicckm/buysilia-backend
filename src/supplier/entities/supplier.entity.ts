import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SupplierDocument = Supplier & Document;

@Schema()
export class Supplier {
  @Prop()
  CNPJ: string;

  @Prop()
  corporateName: string;

  @Prop()
  fantasyName: string;

  @Prop()
  mainContact: string;

  @Prop()
  telephone: string;

  @Prop()
  completeName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  cellphone: string;
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
