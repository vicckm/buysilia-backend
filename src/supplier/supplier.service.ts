import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier, SupplierDocument } from './entities/supplier.entity';

@Injectable()
export class SupplierService {
  constructor(
    @InjectModel(Supplier.name) private supplierModel: Model<SupplierDocument>,
  ) {}

  create(createSupplierDto: CreateSupplierDto) {
    const supplier = new this.supplierModel(createSupplierDto);
    return supplier.save();
  }

  findAll() {
    return this.supplierModel.find();
  }

  findOne(id: string) {
    return this.supplierModel.findById(id);
  }

  update(id: string, updateSupplierDto: UpdateSupplierDto) {
    return this.supplierModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateSupplierDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.supplierModel.deleteOne({
      _id: id,
    });
  }
}
