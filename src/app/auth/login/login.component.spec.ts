import { ComponentFixture, TestBed } from "@angular/core/testing";
import LoginComponent from "./login.component"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from "@angular/platform-browser";
import jasmine from "jasmine";


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientTestingModule]
    })
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

   /* Probamos que el formulario sea invalido cuando solo proporcionamos 1/2 datos requeridos que pasen las  validaciones de los inputs
   */
  it('debe retornar formulario invalido', () => {
    fixture.detectChanges();
    const email = component.userForm.controls['email'];
    email.setValue('test@gmail.com');
    expect(component.userForm.invalid).toBeTrue();
  })

  /* Probamos que el formulario sea valido con los datos que pasen los requisitos para las validaciones de sus    inputs
  Para el email se pasa un email valido y para la contraseña se pasa una contraseña valida
  */
  it('debe retornar formulario valido', () => {
    fixture.detectChanges();
    const email = component.userForm.controls['email'];
    const password = component.userForm.controls['password'];
    email.setValue('test@gmail.com');
    password.setValue('123456');
    expect(component.userForm.valid).toBeTrue();
  });

  /*Probamos que el formulario sea invalido cuando se excede el limite de caracteres en alguno de los inputs
    Max length de la contraseña es 30
    Max length del email es 30
  */
  it('debe retornar formulario invalido por exceder el limite de caracteres', () => {
    fixture.detectChanges();
    const email = component.userForm.controls['email'];
    const password = component.userForm.controls['password'];
    email.setValue('test@gmail.com')
    password.setValue('123456789012345678901234567890123456789012345678901234567890')
    expect(component.userForm.invalid).toBeTrue();
  });
});
