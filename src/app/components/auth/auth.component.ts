// src/app/components/auth/auth.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AuthService } from '../../services/auth.service';
import { AuthStore } from './auth.store';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [FormsModule], // Include FormsModule in imports
})
export class AuthComponent {
  username = '';
  password = '';
  isLoginMode = true;

  constructor(
    private authService: AuthService,
    private authStore: AuthStore,
    private router: Router
  ) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  submit() {
    if (this.isLoginMode) {
      if (this.authService.login(this.username, this.password)) {
        this.authStore.setState({
          username: this.username,
          password: this.password,
        });
        this.router.navigate(['/products']);
      } else {
        console.error('Invalid login credentials');
      }
    } else {
      if (this.authService.register(this.username, this.password)) {
        this.authStore.setState({
          username: this.username,
          password: this.password,
        });
        console.log('Registration successful');
        this.toggleMode(); // Switch to login mode after registration
      } else {
        console.error('Registration failed');
      }
    }
  }
}
