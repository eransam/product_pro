// src/app/services/product.service.ts
import { Injectable, signal } from '@angular/core';

export interface Product {
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = signal<Product[]>([
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 }
  ]);

  getProducts() {
    return this.products();
  }

  addProduct(product: Product) {
    this.products.set([...this.products(), product]);
  }
}
