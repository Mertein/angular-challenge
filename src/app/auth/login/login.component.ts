import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'
import { FormControl, ReactiveFormsModule, FormGroup, FormsModule,} from '@angular/forms';
import { Validators } from '@angular/forms';
import { MaterialModule } from '../../material.module';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, FormsModule, CommonModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  public email: FormControl<string|null> = new FormControl('');
  public password: FormControl<string|null> = new FormControl('');
  submitted = false;
  userForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
    ]),
  })
  get passwordFormField() {
    return this.userForm.get('password');
  }

  get emailFormField() {
    return this.userForm.get('email');
  }

  login (){
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
  }
    console.warn(this.userForm.value)
  }

}



