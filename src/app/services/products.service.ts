import { Injectable } from '@angular/core';
import { Products } from '../products/products.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl : string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.baseUrl);

    }


}
