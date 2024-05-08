import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder,} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email: FormControl<string|null> = new FormControl('');
  public password: FormControl<string|null> = new FormControl('');


}



