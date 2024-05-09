import { Injectable } from '@angular/core';
import { Products } from '../products/interfaces/products';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl : string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.baseUrl);
  };

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categories`);
  }

  getProductById(id: number): Observable<Products> {
    return this.http.get<Products>(`${this.baseUrl}/${id}`);
  }
}
