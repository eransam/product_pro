// src/app/components/product-card/product-card.component.ts
import { Component, Input } from '@angular/core';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
}
