// src/app/components/auth/auth.store.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {
  private authState = signal<{ username: string; password: string }>({ username: '', password: '' });

  getState() {
    return this.authState();
  }

  setState(newState: Partial<{ username: string; password: string }>) {
    this.authState.set({ ...this.authState(), ...newState });
  }
}
