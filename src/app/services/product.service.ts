import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseURL = 'http://localhost:3005/products';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.baseURL);
  }
  getProductById(productId: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.baseURL}/${productId}`);
  }
  addProduct(product: Iproduct) {
    return this.http.post(this.baseURL, product);
  }
  deleteProduct(productId: Iproduct) {
    return this.http.delete(`${this.baseURL}/${productId}`);
  }
}
