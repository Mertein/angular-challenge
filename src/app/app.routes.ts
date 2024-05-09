import { RouterModule, Routes } from '@angular/router';
import ProductsComponent from './products/products.component';
import LoginComponent from './auth/login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
