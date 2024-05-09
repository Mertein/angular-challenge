

import { Injectable } from '@angular/core';
import { Products } from '../products/interfaces/products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AuthService {


  constructor(private http: HttpClient) { }



  login(email: string, password: string): Observable<any> {
    if(!email || !password) return new Observable();

    const response = this.http.get('http://localhost:3000/users');

    return this.http.post('http://localhost:3000/login', { email, password });

  }

}
