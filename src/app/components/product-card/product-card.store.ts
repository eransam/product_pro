// src/app/components/product-card/product-card.store.ts
import { Injectable, signal } from '@angular/core';
import { Product } from '../../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCardStore {
  private cardState = signal<Product | null>(null);

  getState() {
    return this.cardState();
  }

  setState(newState: Product | null) {
    this.cardState.set(newState);
  }
}
