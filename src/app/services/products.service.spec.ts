import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsService', () => {
  let service: ProductsService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a method called getProducts', () => {
    expect(service.getProducts).toBeDefined();
  });

  it('should have a method called getCategories', () => {
    expect(service.getCategories).toBeDefined();
  });
});
