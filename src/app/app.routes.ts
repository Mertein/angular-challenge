import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'app-products',
  loadComponent: () => import('./products/products.component'),
  },
  {
    path: '',
    redirectTo: 'app-login',
    pathMatch: 'full',
  },
  {
    path: 'app-login',
    loadComponent: () => import('./auth/login/login.component'),
  },

];
