// src/app/components/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { AppStore } from '../../services/app.store';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [ProductCardComponent],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private router: Router,
    private appStore: AppStore
  ) {}

  ngOnInit() {
    const state = this.appStore.getState();
    this.isLoggedIn = state.isLoggedIn;

    if (this.isLoggedIn) {
      this.products = this.productService.getProducts();
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
    this.appStore.setState({ isLoggedIn: false });
    this.router.navigate(['/login']);
  }
}
