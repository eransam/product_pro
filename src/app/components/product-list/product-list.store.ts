// src/app/components/product-list/product-list.store.ts
import { Injectable, signal } from '@angular/core';
import { Product } from '../../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListStore {
  private productListState = signal<Product[]>([]);

  getState() {
    return this.productListState();
  }

  setState(newState: Product[]) {
    this.productListState.set(newState);
  }
}
