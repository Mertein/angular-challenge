import { ComponentFixture, TestBed } from '@angular/core/testing';

import  ProductsComponent  from './products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StorageService } from '../services/storage.service';
import { ProductsService } from '../services/products.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let service: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientTestingModule],
    })
    .compileComponents();
    service = TestBed.inject(ProductsService);
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe llamar a getProducts y getCategories al inicializar', () => {
    const getProductsSpy = spyOn(service, 'getProducts').and.callThrough();
    const getCategoriesSpy = spyOn(service, 'getCategories').and.callThrough();
    component.ngOnInit();
    expect(getProductsSpy).toHaveBeenCalled();
    expect(getCategoriesSpy).toHaveBeenCalled();
  });

  // it('debe llamar a getProducts y getCategories y devolver datos', () => {
  //   const products = service.getProducts();
  //   const categories = service.getCategories();
  //   products.subscribe((data) => {
  //     expect(data).toBeTruthy();
  //   });
  //   categories.subscribe((data) => {
  //     expect(data).toBeTruthy();
  //   });
  // });
});
