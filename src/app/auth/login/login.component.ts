import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'
import { FormControl, ReactiveFormsModule, FormGroup, FormsModule} from '@angular/forms';
import { Validators } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
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
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService) {}

  get passwordFormField() {
    return this.userForm.get('password');
  }

  get emailFormField() {
    return this.userForm.get('email');
  }


  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  login(): void {
    this.authService.login(this.userForm.value.email!, this.userForm.value.password!).subscribe({
      next: (user: any) => {
        this.storageService.saveUser(user);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      error: (err: any) => {
        this.errorMessage = err.message;
        this.isLoginFailed = true;
        alert('User not found or some data is incorrect. Please try again.  ');
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}



