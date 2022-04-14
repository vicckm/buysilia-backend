export interface Product {
  description: string;
  name: string;
  price: number;
  quantity: number;
}

export class CreateProductDto {
  description: string;
  name: string;
  price: number;
  quantity: number;

  constructor({ description, name, price, quantity }: Product) {
    (this.description = description),
      (this.name = name),
      (this.price = price),
      (this.quantity = quantity);
  }
}
