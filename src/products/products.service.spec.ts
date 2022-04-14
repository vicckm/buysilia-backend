import { Test, TestingModule } from '@nestjs/testing';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  describe('find', () => {

    // it('should return an array of products', async () => {
    //   let result: Array<any>;
    //   jest.spyOn(service, 'findAll').mockImplementation(() => result);

    //   expect(await catsController.findAll()).toBe(result);
    // });
  })


  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
