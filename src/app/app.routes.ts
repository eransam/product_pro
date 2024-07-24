// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
  // Ensure this is exported
  { path: 'auth', component: AuthComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];
