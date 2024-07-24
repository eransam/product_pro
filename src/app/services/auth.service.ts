// src/app/services/auth.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = signal<boolean>(false);

  isLoggedIn() {
    return this.loggedIn();
  }

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      this.loggedIn.set(true);
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn.set(false);
  }

  register(username: string, password: string): boolean {
    if (username && password) {
      return true;
    }
    return false;
  }
}
