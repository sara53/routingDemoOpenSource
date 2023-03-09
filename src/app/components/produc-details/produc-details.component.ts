import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-produc-details',
  templateUrl: './produc-details.component.html',
  styleUrls: ['./produc-details.component.css'],
})
export class ProducDetailsComponent implements OnInit {
  productId: number = 0;
  product: Iproduct | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe({
      next: (response) => (this.product = response),
    });
  }
}
