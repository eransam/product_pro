// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Bootstrap the application using standalone component
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Use provideRouter instead of RouterModule.forRoot()
  ],
}).catch((err) => console.error(err));
