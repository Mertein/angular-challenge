import { HttpClient } from '@angular/common/http';
import { AuthService } from "./auth.service";
import { of, throwError } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AuthService(httpClientSpy as any);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user object (Correct login)', (done: DoneFn) => {
    const mockUserCredentials = {
      email: "user@demo.com",
      password: "123456"
    };

    const mockResultLogin = {
      email: "user@demo.com",
      password: "123456"
    };

    httpClientSpy.get.and.returnValue(of([mockResultLogin]));
    const { email, password } = mockUserCredentials;
    service.login(email, password).subscribe(resultado => {
      expect(resultado).toEqual(mockResultLogin);
      done();
    });
  });
});




