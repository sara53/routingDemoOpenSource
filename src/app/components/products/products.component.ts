import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Iproduct[] = [];
  constructor(private productService: ProductService) {} // initalization
  ngOnInit(): void {
    this.products = this.productService.getAllProduct();
  }
}
