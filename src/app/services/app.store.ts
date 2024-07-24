// src/app/services/app.store.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStore {
  private appState = signal<{ isLoggedIn: boolean }>({ isLoggedIn: false });

  getState() {
    return this.appState();
  }

  setState(newState: Partial<{ isLoggedIn: boolean }>) {
    this.appState.set({ ...this.appState(), ...newState });
  }
}
