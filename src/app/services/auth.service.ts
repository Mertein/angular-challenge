import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const AUTH_API = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public mockUserValid = {
    email: 'user@demo.com',
    password: '123456',
  }

  constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<any> {

    //This function is a mock function that simulates a login request to the server
    if(email !== this.mockUserValid.email|| password !== this.mockUserValid.password) {
      return new Observable((observer) => {
        throw new Error('Usuario no encontrado');
      });
    } else {
      return new Observable((observer) => {
        observer.next(this.mockUserValid);
        observer.complete();
      });
    }

    // return this.http.get<any>('http://localhost:3000/signupUsersList').pipe(
    //   map((res: []) => {
    //     const user = res.find((a: any) => a.email === email && a.password === password);
    //     if (user) {
    //       return user;
    //     } else {
    //       throw new Error('Usuario no encontrado');
    //     }
    //   })
    // );
  }

  // register(username: string, email: string, password: string): Observable<any> {
  //   return this.http.post(
  //     AUTH_API + 'signup',
  //     {
  //       username,
  //       email,
  //       password,
  //     },
  //     httpOptions
  //   );
  // }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + '', { }, httpOptions);

  }


}
