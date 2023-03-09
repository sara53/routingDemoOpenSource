import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { productList } from '../models/productsList';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getAllProduct(): Iproduct[] {
    return productList;
  }

  getProductById(productId: number): Iproduct {
    return productList.filter((product) => product.id == productId)[0];
  }
}
